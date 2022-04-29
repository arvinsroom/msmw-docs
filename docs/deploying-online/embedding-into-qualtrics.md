---
id: embedding-into-qualtrics
title: Embedding into Qualtrics or Other Websites
sidebar_position: 4
---

You are able to embed the entire Tool within a Qualtrics study using custom HTML that embeds the website you have deployed online. This avoids having to redirect participants to different URLs if you are using both Qualtrics and the tool.

Within a Qualtrics study, create a **Text / Graphic type question**. It is ideal that this question is on it's own page to maximize the amount of space used by the tool and avoid navigation issues for participants.

When you click to edit the text in that question, select **HTML View** button at the top-right the text field. Here, you can input and customize the required custom HTML below:

```
<div style="position:relative;overflow:hidden;width:100%;height:600px;">
<iframe src="studylinkhere" style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:5px solid black"></iframe>
</div>
```

![Screenshot of inputting custom HTML into Qualtrics](/img/page-qualtrics-custom-html.png)

For your specific study, you will replace `studylinkhere` with the link to the main URL or the URL of your specific condition, depending how you are structuring your study.

What this is doing is essentially embedding one webpage (the tool) into another (Qualtrics) and applying additional formatting and styling to optimize it for as many devices as possible. Once your study is fully configured, we recommend doing a run-through of your study on these devices (e.g., desktop/laptop, tablet, smartphone) then adjusting these values accordingly. If you want to better understand or customize the styling applied in the example code above, you can learn more about Cascading Style Sheets (CSS) properties [here](https://developer.mozilla.org/en-US/docs/Web/CSS).

:::caution Known issues with very small displays
Limited testing so far has revealed that participant devices with smaller-sized displays, such as recent iPhone Mini models (5.4 inches), may have difficulty replying to posts as the correct dropdowns do not appear upon clicking the reply button. Researchers are encouraged to make participants aware of this on consent forms and encourage them to use larger-display devices if possible.
:::

## Embedding anywhere

Because this is basic HTML code, Qualtrics is not the only place you can embed the tool. In fact, you're able to embed the tool on any website that allows you to write custom HTML code.
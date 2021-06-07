---
sidebar_position: 3
---

# Embedding in Qualtrics or Other Websites

You are able to embed conditions within a Qualtrics study using custom HTML that embeds the website you have deployed online. custom website.

Within a Qualtrics study, create a **Text / Graphic type question**. It is ideal that this question is on it's own page to maximize the amount of space used by the tool and avoid navigation issues for participants.

When you click to edit the text in that question, select the **Rich Content Editor...** button above the text. In the Rich Content Editor, select the "Source' button (![Source icon on Qualtrics](/img/page-qualtrics-source-icon.png)) to input the required custom HTML below.

```
<c>iframe src="studylinkhere" width="800px" height="450px"></iframe></c>
```

![Screenshot of inputting custom HTML into Qualtrics](/img/page-qualtrics-custom-html.png)

What this is doing is essentially embedding one webpage (the tool) into another (Qualtrics) and centring it on the page (which is what the `<c>` and `</c>` tags do). This avoids having to redirect participants to different URLs if you are using both Qualtrics and the tool.

For your specific study, you will replace `studylinkhere` with the link to the main URL or the URL of your specific condition, depending how you are structuring your study. Additionally, you can change the width (`1000px`) and height (`950px`) to customize how large or small the window of the tool is within Qualtrics. How big this box should be depends on what devices your participants will be using to access the website. Once your study is fully configured, we recommend doing a run-through of your study on these devices (e.g., desktop/laptop, tablet, smartphone) then adjusting these values accordingly.

## Embedding anywhere

Because this is basic HTML code, Qualtrics is not the only place you can embed the tool. In fact, you're able to embed the tool on any website that allows you to write custom HTML code.
---
id: study-structure
title: Study Structure
sidebar_position: 1
---

Studies using the tool are structured into **conditions**, each of which are comprised of a series of **pages**. The mock social media website interface is just one of several different page types that can be organized into a sequence for participants to interact with. Some pages, particularly the multiple choice and open text pages, can have several components within them.

Your study does not need to have more than one condition, but being able to randomly assign participants to differing conditions is one of the benefits of this tool.

## Creating conditions

To create a condition, visit the admin portal of your deployed website. It will always be the URL that your website is deployed to (either the local or online address), followed by `/admin`, such as `https://studysocial.media/admin`. On this page, enter your admin credentials to log in.

To create a new condition, under the Create a Condition panel type in a **unique name** so that you can identify it, and click the save button. The process of creating a new page is identical to this, requiring you to start by giving it a name, so it is important that you use descriptive names to make sure you don't get confused later on.

:::note Configure permissions and other requests
When creating a condition, you can ignore these settings (and leave them disabled) until we build the features that would make use of these browser requests.
:::

## Configuring and assigning conditions

Below the save button, there is a table in the Edit Conditions panel that showing all the conditions that have been created and important information about how you can link your participants to them.

* **Condition Name** is the unique name of the condition that you specified above.
* **Language** is the language that the entire user interface will be rendered in for participants. Read more about this in the [documentation for Social Media Pages](https://docs.studysocial.media/docs/configuring-your-study/social-media-pages)
* **Set as Active** allows you to select the condition that you want to configure (e.g., add pages, delete pages, configure languages)
* **Access Code** is a six-digit code that is randomly generated for each condition when it is created, which determines how condition can be accessed by participants. For example, if a condition has an access code of `123456`:
    * Participants can go to the main URL (e.g. `https://studysocial.media/`) and input `123456` as the Access Code to interact with that condition
    * Participants can go to the main URL followed by `/`123456` to interact with that condition (e.g., `https://studysocial.media/123456`)
* **Change Access Code** allows you to manually change the Access Code for a condition by entering a new six-digit code and clicking the save icon.
* **Delete** allows you to delete a condition. 

:::caution Deleting conditions
If you delete a condition, it will delete ALL information associated with that condition, including created pages, uploaded stimuli and language spreadsheets, and participant data.
:::

## Configuring random assignment

You can **randomly assign** your participants to different conditions by changing all of their Access Codes to the same six-digit number. When you do this, when participants who enter the Access Code at the main URL or visit the URL for that access, the tool will randomly direct them to one of the conditions with that Access Code. The condition that they actually go through will be saved in the data.

:::note Changing access codes
It is advised that you only manually change the access code to one that has already been randomly assigned to a condition. If you add a new number there, you run the risk of giving a condition an access code that is shared with another condition set up by a different admin user, which might end up randomly assigning a participant to conditions from two completely different studies.
:::

## Customizing conditions

Once you have created your condition, click its icon in the **Set as Active** column in the table in the Edit Conditions panel to start customizing it.

When you set a condition as active, the bar at the top updates to reflect the active condition, and options to customize the condition open up on the sidebar. Customizing a condition involves creating and sequencing the order of presentation of pages you create within that condition, which is detailed in the next few guides.

We highly recommend creating a document that contains all the information you will be uploading to the different pages and in which order they will be presented to help organize your study and have an easy way to re-upload to the tool in case you make a mistake. You can find an example of what we have been calling a "flow document" [here](https://osf.io/be43m/).
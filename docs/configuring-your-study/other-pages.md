---
id: other-pages
title: Other Pages
sidebar_position: 3
---

# Other Pages

In addition to the social media pages, there are several other kinds of page types that you can add to the website which are useful in research studies.

## Registration

The registration page allows you to simulate the sign-up process to a social media website and feed the user information they provide into their experience on the social media page, such as a username and profile photo. For this reason, a registration page should always precede a social media page.

Before saving a registration page, you need to add fields for all of the user information you want participants to submit. You can add a field using the + button.

For each field:
* **Display name** specifies what the participants see as what the field is requesting (e.g., if you type "Username" here, that is what it will say before the field to the participants).
* **Order** determines the order in which the field is presented, relative to other fields. The order of fields must start at 1 and go no higher than the total number of fields. 
* **Field Required?** is a toggle that determines whether participants will be required to submit something for that field to be able to progress to the next page or not.
* **Store Response to Database?** is a toggle which, if enabled, stores that data to the database.
    * If it is toggled off, this data is only stored locally in participants' browsers which allows participants to submit potentially identifying information, which can help personalize their experience on social media pages and make it more realistic (e.g., profile photo, username), without the researchers ever being able to access that information. We believe this is a good way to increase ecological validity as well as avoid unnecessary collection of and risks associated with collecting identifying information.
* **Delete field** lets you scrap the field you are in the process of specifying.
* **Custom Field Type** allows you to specify the kind of data that will be requested of the participant.
    * Based on the field type you choose, there will be a different input and different validation to make sure that participants enter information that is appropriate for that type. For example, an image field will have an upload button, and ensure that participants are only uploading image files. Comparatively, an email field will take text as an input, but the website will make sure that it is in email format before accepting it (e.g., example@website.com).
* **Custom Field Reference Name** indicates what variable the data from this field is assigned to. Simply, only fields that are connected to a variable are able to be used in other parts of the website. For example, only if an image field references the profile photo variable will it be used for participants' profile photos in a subsequent social media page.

:::info Storing identifying information
If you choose to store responses to the database, please make sure that participants receive sufficient informed consent.
:::

## Information

An information page is a versatile way to display static content (e.g., text, images) to participants using a rich content editor. This has many different uses, most notably the ability to give participants instructions ahead of interacting with a social media page (e.g., "imagine you are using your personal social media") or collect informed consent from participants within the study itself.

By toggling **Add "I consent" and "I do not consent" options at the bottom of the page** on, participants will have to indicate that they consent to proceed in the study, otherwise they will be automatically sent to the finish page of the study.

By toggling **Make this page terminal** on, you can make it so that this page has no next button at the bottom for proceeding to the next page in sequence. This is intended to be used as a finishing or thank you page for participants at the end of a study.

### Misinformation display

We also have included unique functionality for misinformation researchers: the ability to show participants which misinformation posts that they liked, shared, and replied-to on a preceding social media page.

The **Select a social media page** dropdown allows you to select a social media page that you have already created to pull data from. When you do this, below any content you specify in the rich content editor above, the info page will output separate lists of misinformation posts that the participant liked, shared, and replied-to. How it does this is that the website reads the stimuli spreadsheet associated with that social media page, and looks for the posts that have a value of `1` in the `IsMisinfo` column. Next, it looks to see if participants interacted (i.e., liked, shared, or replied-to) that post, and if they did, it lists what is in the `Post Message` field for a given post under the heading for the respective. If that post does not have a `Post Message` 

For example, if a post with a value of `Essential oils cure cancer!` in the `Post Message` column also has a value of `1` in the `IsMisinfo` column, and then a participant likes that post, the misinformation display will show `Essential oils cure cancer!` as a part of a list of posts that the participant liked which are misinformation. This is dynamic and is different for each participant based on their individual behaviour.

#### Using the misinformation display for other feedback

This feature was designed for misinformation in mind, but it's functionality can be used to give participants feedback on any group of posts that you specify beforehand. Instead of misinformation, you can give a `1` value in the `IsMisinfo` column for that group of posts.

s for a pretty specific purpose for now, but we intend to expand it in the future so that participants can use values in any column of the stimuli (e.g., other metadata) and display custom feedback based on their interactions with posts which have certain values. However, by creating your own custom column in the language document, you can change what

:::caution Order of misinformation display
For the misinformation display feature to work, its info page must sequentially come after the social media page it is referencing in the Study Flow settings.
:::

## Multiple Choice and Open Text

The Multiple Choice and Open Text page types function very similarly. For each page, you can use a rich text editor to add instructions or any other information you would like to provide participants at the top of the page, followed by the questions you add to the page, which you can do by clicking the Create New Question button. Every time you click the Create New Question button, another card will appear below to customize an additional question.

From there, you can add the question text into the Type Question Here field, and indicate whether the question requires a response for participants to proceed to the next page in the sequence using the toggle switch. If you no longer want a question on the page you're creating, you can click the delete button to remove it.

For multiple choice questions, you can then click the Add Response Option button to create a new response option associated with each question; each having a delete button next to it if you change your mind. Multiple choice questions also have an additional toggle which allows you to accept multiple responses for any given question, which is useful if you want participants to select all options that apply to a question/statement.

You can specify an order value for each question and response option (for multiple choice questions) on a page. This specifies the order in which the question or response option within a question is presented. Similar to assigning Access Codes, if you give questions or response options the same order value, they will be displayed to participants in a randomized order. For multiple choice and open text pages, we recommend that this order value is 1. If you have a predefined order of presentation in mind, use order values from 1 to the total number of questions or responses you have.

## Redirect

The redirect page is an old page type that we creating during development that is now deprecated because the info page can do everything it did and better. Future updates to the tool will remove this page type.
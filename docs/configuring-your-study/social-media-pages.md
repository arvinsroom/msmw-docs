---
sidebar_position: 2
---

# Social Media Pages

:::caution Under construction
This section is under construction. Please check back later. In the future, a template post spreadsheet will be added here with specific details about what each column in the spreadsheet specifies.
:::

The social media page is the bread and butter of the tool and is the page type that simulates the social media timeline according to your specifications. By default, participants can only proceed to the next page in your study by scrolling to the bottom of the timeline.

## Step 1 - Basic information

In Step 1, you will specify the social media platform (e.g., Facebook, Twitter) that your social media page will simulate, the contents of each of the posts on timeline, and the order that the posts will be presented in (based on the post spreadsheet you upload).

By clicking the Upload Post Spreadsheet button, you can upload a spreadsheet containing all of the posts and all of their attributes.

### Post spreadsheet

## Step 2 - Upload associated media

By clicking the Upload Post Media button, you can upload the photos, videos, and link thumbnails that are associated with the PHOTO, VIDEO, and LINK type posts from the post spreadsheet you just uploaded. You do this by uploading media that has the exact same filename as the `postID` of the post you want to associate it with. For example, if I want to attach a video to a post with a `postID` of `1001`, the video's filename should be something like `1001.mp4`. A wide range of common file formats are supported, but it advised that you use .mp4 for videos.

Similarly, it is highly recommended that you upload stimuli in batches so that they do not overwhelm the database, and that no single batch exceeds 20MB in size.

:::caution Large file sizes for medi
It is important to note that the larger the size and number of media you upload, the more taxing the website becomes on web storage and participants' computers, which can cause the study to crash for participants. For this reason, we recommend the use of highly compressed and sub-HD videos.
:::

## Step 3 - Upload language information

### Language spreadsheet

At this stage, you must upload a language spreadsheet, which contains all of the words that are displayed to the participant on the social media timeline UI, as well as every other part of the user interface pages for that condition, from the initial field asking participants for their "Participant ID" to what the next button says.

As a result, the language you end up choosing in Step 4 after the language spreadsheet has been uploaded becomes the de facto language for the whole condition, not just the social media page, which is why you must specify this if even if you are doing this study in English.

[You can find the latest version of the language spreadsheet template here](https://osf.io/q5k96/).

We force you to upload a spreadsheet so that you have full control over what every participant-facing piece of text on the website says in case you disagree with the words we have used, want to experimentally test changes to text in the user interface of social media platforms, or want to deploy the study in a language that is not supported by default.

#### Adding custom languages

You can add additional languages or alter the text of user interface by adding a **new column** into the template language spreadsheet that is adjacent to the existing columns in the template spreadsheet (i.e., there cannot be empty columns between languages in the spreadsheet).

**It is critically important that you do not, under any circumstance, change any of the words in the "English" column of the language spreadsheet.** The exact words in the English column are used by the code to reference what should be displayed and are used as a failsafe. Thus, if you wish to change some English words or add a new language, please create a new column. You can name it whatever you want (other than `English`) and add your translated words here. In the case of modifying English words, you can copy and paste all of the English words into the new column and change the ones you desire.

When adding a new column to your spreadsheet, it is critical that you provide translations for all words with `GLOBAL` under the `Platform` column, as those words comprise the non-social-media-page user interface elements, in addition to those for the platform you are seeking to simulate.

Once you click save, your language spreadsheet will be uploaded to the tool and you are ready to proceed to Step 4.

:::tip Contribute translations
If you're running a study for participants who read a language other than the included ones (English, Simplified Chinese, Tagalog, or Punjabi) and end up creating translations for that language, I encourage you to share these translations with the research community in the spirit of open source. The best way to do this is to e-mail Arvin your modified spreadsheet so that he can update the publicly available spreadsheet with these translations.
:::

## Step 4 - Select user interface language

Now that you have uploaded the language spreadsheet, you are able to select the interface language that you would like the website presented to participants in. Both the social media pages and all other user interface elements (e.g., Participant ID field, next button, error codes, placeholder text etc.) will be in the language you select.

Once you have specified you're language, hit the save button to finalize and create your social media page!
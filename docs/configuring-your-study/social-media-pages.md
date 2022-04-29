---
id: social-media-pages
title: Social Media Pages
sidebar_position: 2
---

:::caution Under construction
This section is under construction. Please check back later. In the future, a template post spreadsheet will be added here with specific details about what each column in the spreadsheet specifies.
:::

The social media page is the bread and butter of the tool and is the page type that simulates the social media timeline according to your specifications. By default, participants can only proceed to the next page in your study by scrolling to the bottom of the timeline.

## Step 1 - Basic information

In Step 1, you will specify the social media platform (e.g., Facebook, Twitter) that your social media page will simulate, information about the authors of the posts on the timeline (optional) the contents of each of the posts on timeline, and the order that the posts will be presented in (based on the post spreadsheet you upload).

### Author Spreadsheet

[Download the Author Spreadsheet Template here](https://osf.io/9nbfd/)

To start, you have the option of specifying the following information about the authors of posts by uploading an author spreadsheet.

* **authorID** is a unique ID associated which each author. This ID is used to connect posts to authors and name media.
* **authorName** is a string containing the name of the account
* **authorVerified** indicates whether the author is verified (a value of `1`) or not (a value of `0`)
* **totalPosts** is the total number of posts that author has made. This information is not currently used anywhere and is for future functionality.
* **totalFollowing** is the total number of other users that this author is following. This information is not currently used anywhere and is for future functionality.
* **totalFollowed** is the total number of other users that this author is following. This information is not currently used anywhere and is for future functionality.
* **authorHandle** is the the author's twitter handle that would appear after the @ sign (e.g., a value of `rvinsroom` would display a handle of `@rvinsroom` to participants)

:::caution No empty values in the author spreadsheet
For the author spreadsheet to successfully upload, it cannot contain any empty cells for specified authors. This means that you should specify the verification status and handle for all authors regardless of whether that information will be rendered for your platform of choice (e.g., you should still put something in the authorHandle column even if you aren't making a Twitter study and it won't show up anywhere).
:::

### Post Spreadsheet

[Download the Post Spreadsheet Template here](https://osf.io/2x7eh/)

By clicking the Upload Post Spreadsheet button, you can upload a spreadsheet containing all of the posts and all of their attributes.

* **postID** is a **required** field where you must give each post a unique, numeric ID, which is used to connect that post to associated media you upload and indicate which post participants interacted with in the exported data.
* **link** is the URL that a `LINK` type of post opens in a new tab when participants click the link preview.
* **linkTitle** is the headline that appears in the link preview for `LINK` types of posts.
* **linkPreview** is the caption text that appears in the link preview for `LINK` types of posts.
* **text** is the text that appears in the main body of the post.
* **sourceTweet** is an unused field where, if using real posts as stimuli, you can put their permalink for your own reference. This information is not displayed anywhere to participants.
* **postType** is a **required** field where you must indicate what kind of post should be rendered using the information in the spreadsheet. The post types are as follows:
    * `TEXT` posts contain only text.
    * `PHOTO` posts contain a single attached photo and can optionally contain text.
    * `VIDEO` posts contain a single attached video and can optionally contain text.
    * `LINK` posts contain a link, which has a link preview rendered alongside of it (which makes use of information in the `link`, `linkTitle`, and `linkPreview` columns) and can optionally contain text.
    * `REPLYTO` posts (currently Twitter-only) contain text and are replies to other posts, requiring a parent post ID (i.e., the post which is being replied to) to be specified in the `isReplyTo` column.
    * `RETWEET` posts (Twitter-only) contain no unique information, and simply display the author associated with the post ID as being the one retweeting it. The parent post ID specified in the `isReplyTo` column indicates which post is being retweeted.
    * `QUOTETWEET` posts (Twitter-only) are posts that contain text and can optionally contain media, which are quoting another post in the spreadsheet (specified in the `isReplyTo` column).
* **isMisinfo** indicates whether the post is misinformation (value of `1`) or not (value of `0`), for use in the misinformation display functionality.
* **authorID** is where you will put the associated ID of the author, and pull their information (e.g., name, handle, verified status) from the author spreadsheet.
* **isReplyTo** indicates the post ID of the parent post, making the current post a child of that parent. This column is used differently depending on the platform and what is in teh `postType` column.
* **isReplyToOrder** is the order in which the child post will be displayed relative to other childs of the parent post. If no value is specified, the order of presentation of child posts will be random. This information is not currently used anywhere and is for future functionality for ordering comments.
* **initLike** is the initial number of likes that a post has which are displayed to participants. An empty field will show that the post has no previous likes to participants.
* **datePosted** is a string indicating when the post was posted.
    * This is simply a plain text field, so you have the choice of relative time (e.g., `27s` like recent posts on Twitter display) or specific ones (e.g., `June 18 at 11:37 AM` as with older post on Facebook display)
    * Note: If your post dates are not displaying as you input them into your post spreadsheet (e.g., you see a five-digit number starting with 4 instead), it may be because Excel is formatting the cells as something other than a generic text string field. A quick fix to this is to add a single quote (`'`) to the start of the date to turn it into a string.

:::caution postIDs are shared across a study
If you are creating multiple conditions using the tool, the posts used in one condition need to have different postIDs from the posts in another condition. An easy way to make sure of this is even when using the same posts throughout conditions is to prefix them with certain numbers (e.g., the same post has a postID of 1001 in one condition, and a postID of 2001 in another condition).
:::

:::caution Do not alter column order
It is important that you do not make any changes to the structure of these template files, such as adding, removing, or rearranging columns, or the data will not upload.
:::

## Step 2 - Upload associated media

By clicking the Upload Post Media button, you can upload the photos, videos, and link thumbnails that are associated with the PHOTO, VIDEO, and LINK type posts from the post spreadsheet you just uploaded. You do this by uploading media that has the exact same filename as the `postID` of the post you want to associate it with. For example, if I want to attach a video to a post with a `postID` of `1001`, the video's filename should be something like `1001.mp4`. A wide range of common file formats are supported, but it advised that you use .mp4 for videos.

Similarly, it is highly recommended that you upload stimuli in batches so that they do not overwhelm the database, and that no single batch exceeds 20MB in size.

:::caution Large file sizes for media
It is important to note that the larger the size and number of media you upload, the more taxing the website becomes on web storage and participants' computers, which can cause the study to crash for participants. For this reason, we recommend the use of highly compressed and sub-HD videos.
:::

## Step 3 - Upload language information

### Language spreadsheet

[Download the Language Spreadsheet Template here](https://osf.io/pcxmw/).

At this stage, you must upload a language spreadsheet, which contains all of the words that are displayed to the participant on the social media timeline UI, as well as every other part of the user interface pages for that condition, from the initial field asking participants for their "Participant ID" to what the next button says.

As a result, the language you end up choosing in Step 4 after the language spreadsheet has been uploaded becomes the de facto language for the whole condition, not just the social media page, which is why you must specify this if even if you are doing this study in English.

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
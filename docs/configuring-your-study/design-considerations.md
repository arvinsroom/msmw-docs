---
sidebar_position: 10
---

# Design Considerations

Below are some things to consider for your study design, based on what we have learned from developing the tool and deploying studies using it.

## Technical Considerations

There are a few technical limitations of and design choices made for the tool that may affect the participant experience and can help diagnose if participants are having errors.

First, participants can only keep the browser tab for the study open for 24 hours after they first open it before it kicks them out. After this time, they will have to begin the study from the start because their access token will have expired.

Second, if participants refresh the page, they will have to begin the study from the start (from entering their participant ID) because the tool will boot them out. Upon clicking refresh, participants receive a browser prompt which warns them of this.

## Study Structure

### Avoiding unnecessary collection of identifying data

One easy way that you can avoid unnecessary collection of identifying participant information (e.g., profile photo, username0), while still letting participants use that information in their simulated social media experience, is by keeping the "Store response to database?" button unchecked when creating a field on a registration page. This saves the data in participants' browsers, meaning that data never leaves their computers to your data, at any point.

### Deploying locally

If you are deploying the website locally, such as on a lab computer, participants might be able to see the localhost URL in browser, which could bias their responding (e.g., break the simulation of a natural social media experience by cueing to them that this is not real). However, you can press <kbd>F11</kbd> in your browser to hide everything but the contents of the webpage so that participants can't see the URL you are using.

### Longitudinal studies

You can conduct longitudinal studies using the tool by pre-assigning participants a Participant ID, and creating conditions for each timepoint.

In the unlikely case that you are presenting participants with the exact same series of pages at each timepoint, participants can use the same condition link each time. The database will accept duplicate responses from the same Participant ID, so in your data you'll be able to find multiple responses from the same Participant ID at different timepoints, with unique Response IDs.

## Post stimuli

### Amount

Keeping a reasonably low number of posts is critical for sustaining participant attention. We ran one study using 88 posts, split across two, sequential social media timelines, and found that many participants ended up rapidly scrolling through the second set of 44 posts at a speed at which they could not have possibly have read each piece of stimuli in full.  In our pilot testing, we asked a research assistants to time how long it took to simply read through the main text of each post, which amounted to about 5-6 seconds per post.

It is unclear if this rapid scrolling behaviour was natural or a cause of the large number of stimuli we exposed them to. However, we recommend researchers err on the side of caution and use less if possible, as we see little benefit to exposing participants to posts that they will skip and not actually be exposed to. For our second study, we cut this number in half and used 44 total. Another strategy is to ask yourself how long you want participants to spend looking at posts. We could not find reliable data on how long an average social media session is, but we suspect that it is also highly variable, so you don't want to bore the people who are on the lower end of the distribution. You can multiply 5-6 seconds by the number of posts you have to get a rough idea of the minimum time participants should take on a given social media timeline.

### Content

If you are concerned participants might skip through your social media page, you can add an attention check post as stimuli by adding a dummy post into your stimuli spreadsheet. It's body of text could be something like "Please like this post to show the researchers that you are paying attention," and then filter out participants who did not like the attention check's associated post ID in the data.

Furthermore, please note that as you add more posts, the more taxing your website becomes on the server's RAM at any given time. For most cases, there is more than enough RAM to go around. However, if you have a lot of video media in your stimuli, your RAM usage will increase sharply because your participants are requesting larger files from the server at any given time, and it is likely that you might have more than one user trying to do that at any given time.
---
sidebar_position: 1
---

# Introduction

![Wordmark for the Mock Social Media Website Tool](/img/logo-wordmark.jpg)

## What is the Mock Social Media Website Tool?

The Mock Social Media Website Tool is an open-source tool for conducting experimental, ecologically-valid research on social media behaviour.

...but what does that entail, exactly? Well, the Mock Social Media Website Tool allows you to do all of the following, simultaneously:

* Simulate highly realistic and interactive timelines/news feeds of posts from social media platforms
* Collect detailed and highly generalizable behavioural data on how participants interact with these posts
* Collect non-social media data as well, such as responses to multiple choice and open text questions
* Construct experiments where you can randomly expose participants to different sets of social media (and non-social media) posts or platforms
* Collect data for participants using any device, for readers of any language, and for participants with any accessibility requirements
* Dynamically give participants individualized feedback based on their interactions with the simulated social media posts within the studies you create


## Try it yourself!

Sometimes, it's easier to show than tell. That is why we have created a demonstration study for you to try out to show and guide you through the capabilities of the tool.

[Click here to try the demonstration study!](https://studysocial.media/919457)

## What studies is the for?

Here are some examples of the kinds of studies that are well-suited to the use of the tool:

* Between-person designs experimentally testing how participants behave in response to different posts or on different platforms
* Within-person designs where participants need to be repeatedly exposed to different posts
* Mixed designs that combine the two!
* Highly ecologically-valid and generalizable designs that require the simulation of natural social media use
* Studies evaluating interventions that manipulate the design of social media
* Studies that require an entire study to be contained within one webpage (including consent form, debriefing, multiple choice, and open-response questions)
* Studies that need to embed a social media timeline into Qualtrics or anywhere else that supports embedding external content via custom HTML

## Why use the tool?

We considered a lot when developing the tool, not the least of which was the input we solicited and received from over 50 social media researchers from all over the world, from varying disciplines. It was not enough for us that the tool was functionally superior to existing methods of showing participants static pictures of social media posts and then asking them how they *would* interact with them to infer behaviour. It was important to us that it was a researcher-friendly tool, meaning:

* **Use of familiar, common input and output data**
    * Spreadsheets go in, spreadsheets go out. Everything about every post on a simulated social media timeline is specified using a simple spreadsheet, and interactions are output are output to a simple .csv file for easy analyses. Use of spreadsheets over GUI-based post builders also help promote replicability for studies using the tools, since materials can be easily shared and reused.
* **Easy to set up and use for researchers**
    * Our survey of social media researchers revealed that the overwhelming majority of them did not have comprehensive coding experience, which directed us to minimize the amount of coding required during set up (e.g., creating centralized configuration files instead of manually editing several documents) and creating a dedicated admin portal on the website where researchers can go build, modify, and export data from their studies. And, as you are reading here, very comprehensive documentation to make sure there is as little ambiguity as possible.
* **Accessible and inclusive for participants**
    * It is more important than ever that when new technology is created, it is accessible and equitable for different groups from the get-go to avoid replicating systemic biases in and exclusions of groups in research. This is why we built the tool to work on any device (mobile usage is the primary form of access in many developing nations), meet Web Content Accessibility Guidelines, and allow everything that participants' see to be presented in any language that researchers wish (again via simply filling out a spreadsheet with translations) - potentially even languages that actual social media platforms do not support yet. As of writing, the tool supports English, French, Simplified Chinese, Tagalog, and Punjabi.
* **Collects detailed behavioural data**
    * Know which posts participants liked, which they shared, what they commented on posts, what media they attached to their own posts, what profile picture they uploaded, what order they saw the posts in, when they started and finished doing the study, and so on. And that is simply what is in the more limited format for exported data; for more complicated research questions the full .JSON data file contains even richer data on each interaction participants make.
* **Ready to adapt to the changes of tomorrow**
    * What happens to prior research when a real social media platform decides to change it's design? Do the results become irrelevant because they apply to a reality that no longer exists? Instagram added the ability to see like counts back in while this very page was being written. Developing the tool to be modular enough to rapidly react to these changes and reduce the lag between social media policy/design and social media research was critical, and we have laid the groundwork for this in the source code.
* **Ready to propose the changes for tomorrow**
    * Because of the same modularity described above, researchers with coding experience now have a starting point for proposing their own design changes to social media. This tool was born to accommodate the needs of Arvin Jagayat's dissertation, the central goal of which was to propose alternative ways of designing social media that could lead to more prosocial outcomes. Each simulated platform is just another component in the tool, so researchers can copy, modify, or create entirely new platforms, plug them into the tool, and start investigating.
* **Open to all**
    * Giving anyone, researcher or not, the ability to freely use and modify the tool is critical to democratize and sustain the ability for anyone to experimentally study social media behaviour. Access to APIs, privacy restrictions, and the inability to experimentally control for confounding factors (notably, exposure to different posts) continue to challenge social media researchers' abilities to study and make generalizable conclusions about how people behave in response to social media content. Our hope is that this tool provides an open methodology for complementing the weaknesses of existing observational and correlation approaches, and one that can evolve and be repurposed over time.

Convinced yet? If so, read on to get started on setting up the tool and creating your first study using it!
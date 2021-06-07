---
sidebar_position: 2
---

# Requirements

:::caution Under construction
This section is under construction and not all of the information on this page is still relevant for the current version of the study. Please check back later for the true requirements of setting up the tool locally and online.
:::

## Software Requirements

### Git

To download the code, you need to st [Git](https://git-scm.com/). Git is a distributed version control software.

[Download and install Git here](https://git-scm.com/).

#### Code Editor

While you could customize the code for the website using a simple text editor like Notepad on Windows, using dedicated code editing software makes doing so significantly easier. The code editor you choose to use does not affect your ability to customize the code, so it is entirely up to your preference. There are many options available, such as [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/), but I personally use and recommend [Visual Studio Code (VSCode)](https://code.visualstudio.com/).

[Download and install Visual Studio Code here](https://code.visualstudio.com/).

## Optional: Visual Studio Code Extensions (Advanced Configuration)

One of the benefits of using Visual Studio Code is access to many extensions that can make code editing more user-friendly and less error-prone. These are primarily 

When you have Visual Studio Code open, you can install extensions by selecting the icon with blocks on the right panel and searching for the names of extensions.

Here are a few that I have found [recommended elsewhere](https://youtu.be/LdF2RcelRg0) and personally found useful:

* **Auto Rename Tag** - Automatically renames the closing tag if you rename the opening tag in HTML, or vice versa.
* **Bracket Pair Colorizer** - Colour-codes brackets so you can more easily see which opening and closing brackets are paired and whether you are missing a bracket anywhere.
* **Code Spell Checker** - Spell checks your use of common functions and tags, which can break the website if spelled incorrectly.
* **HTML CSS Support** - Gives autocomplete suggestions based upon existing classes and id values in your code, which is helpful for avoiding spelling errors.
* **indent-rainbow** - Helps you see what code is indented at what level by adding a rainbow to the indented space. Useful for cases where there are multiple instances of nested code and it is hard to visually determine what level something is nested at.
* **Prettier - Code formatter** - Every time you save your files, it cleans up the document to be more readable in various ways (e.g. aligns indents to their appropriate level for nested code).

#### Setting Up Your Development Environment

In VSCode, open the terminal by clicking Terminal -> New Terminal

This will open up a terminal panel at the bottom, which allows us to run commands in the command line of the operating system you will be using. In your command line, type the following commands and press enter:

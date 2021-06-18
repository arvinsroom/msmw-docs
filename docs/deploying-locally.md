---
sidebar_position: 3
---

# Deploying Locally

You can deploy the tool locally on any device running Windows, Mac, or Linux operating systems, and using the following steps. To inexperienced users, this whole process should take under two hours.

## Installing required software

First, you will need to install the software required to deploy the study.

### Visual Studio Code 

[Download here](https://code.visualstudio.com/).

Visual Studio Code is a code editor. You could do everything you need to do to set the tool up using a combination of a basic text editor (e.g., Notepad on Windows) and command-line interfaces (e.g., Command Prompt on Windows, Terminal on Mac/Linux), but Visual Studio Code makes everything significantly easier. You could also use any other dedicated code editing software of your choice in place of Visual Studio Code, such as such as [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/), but Visual Studio Code is what this guide will focus on.

### Node.js and npm

[Download here](https://nodejs.org/en/download/) (installs both Node.js and npm together).

In the simplest of terms, Node.js is a way of running JavaScript outside of a web browser (i.e., locally) and npm (Node Package Manager) is a package manager which allows you to download, update, and manage the JavaScript functions and applications installed on your system.

If you have never installed these before, it is ideal that you download version **13.12.0**, which you can do by going to [this](https://nodejs.org/en/download/release/v13.12.0) page and selecting the installer that is appropriate for your operating system (.msi files for Windows and .pkg files for Mac) and version of Windows (32- or 64-bit; see [here](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d) to check which version you have). If you bought your computer in the last decade, you probably have a 64-bit version of Windows.

If you have a different version installed already, everything should still work fine and you do not have to specifically uninstall and then reinstall version 13.12.0.

Last, if you are on Windows, you will likely have to add node as a PATH environment variable on your device or else the commands for doing final tweaks on and deploying the tool may not work. You can watch a video on how to do this [here](https://youtu.be/hiVKXJ2hAdo).

If you are unable to do this, or the option to add to your PATH variables is not present, you may need to contact your IT or system administrator or write npm commands differently for some of the steps below.

### MySQL Version 8.0.22

[Download here](https://downloads.mysql.com/archives/installer/).

MySQL is widely-used database software, and is what the tool will use to store the conditions you create and the data they collect.

Use the **Product Version** dropdown box to choose version **8.0.22** and your operating system, and click download on either of the installers (they will both do the same job). Open the installer once you have downloaded it.

You may get a pop-up saying that you need to apply a Mandatory SQL Installer Upgrade; if you do, click Yes. You may also be asked to install a Microsoft Visual C++ 2019 Redistributable Package if you don't have it installed already, which you should also do.

During installation:

* **Choosing a Setup Type:** Choose **Server only**.
* **Download:** Click **Execute**.
* **Installation:** Click **Next**.
* **Product Configuration:** Click **Next**.
* **Type and Networking:** Leave the defaults and click **Next**.
* **Authentication Method:** Keep it on "Use Strong Password Encryption for Authentication (RECOMMENDED)" and click **Next**.
* **Accounts and Roles:** Input **rootboot** as your MySQL Root Password (you also have to repeat it in the next Repeat Password field) and click **Next**. The password that you use here can be whatever you wish based upon what you have configured in the config file, but we're using the default for now. If you are deploying locally, it doesn't matter that much.
* **Windows Service:** Leave the defaults and click **Next**.
* **Apply Configuration:** Click **Execute**. When done, click **Finish**.
* **Product Configuration:** Click **Next**.
* **Installation Complete:** Click **Finish**.

If you followed the steps above, you have successfully installed a local MySQL server and configured the database for the tool to hook into, and are ready to download and set up the tool's code.

## Downloading the code

Second, you will need to download the code from the [GitHub repository](https://github.com/arvinsroom/mocksocialmediawebsite). There are two ways of doing this with different advantages, but they are functionally the same.

### Option 1: Regular download and unzip

Regularly downloading and unzipping the code is the fastest and easiest way to get the tool up and running, but will make updating your local versions more time consuming in the future because you'll have to repeat all of the steps from here onwards.

On the [repository page](https://github.com/arvinsroom/mocksocialmediawebsite), click the green **Code** download button, and select **Download ZIP**. Open the downloaded zip file and extract its contents, which should be a **mocksocialmediawebsite-main** folder containing the code for the tool. If you are on Windows and do not have a file extraction program, you can download [7-Zip](https://www.7-zip.org/).

Once this is extracted, open up Visual Studio Code. You should see a "Getting Started" document open in Visual Studio Code if this is your first time using it. Using the menu at the top, click **File -> Open Folder...** and open the mocksocialmediawebsite-main folder. Once this is done, you are ready to proceed to the next step.

### Option 2: Clone the GitHub repository

Cloning the GitHub repository using Git is more complicated and takes more time, but makes it painless to update in the future when the source code is updated (e.g., with bugfixes or new features). If you encounter difficulties, you can read more about the process of cloning GitHub repositories [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).

To do so, you will need to install [Git](https://git-scm.com/). Git is a distributed version control software; essentially allowing for quick and efficient ways for multiple people to download, update, and upload code.

Next, create a folder on your device where you want the tool to be downloaded to. It doesn't matter what it is called, but to make going through this guide easier, name it `mocksocialmediawebsite-main`.

Once you have Git installed and your folder created, open up Visual Studio Code. You should see a "Getting Started" document open in Visual Studio Code if this is your first time using it. Using the menu at the top, click **File -> Open Folder...** and open the folder that you just created.

With this folder open in Visual Studio Code, you will need to open a Git Bash terminal. If there isn't already a panel open on the bottom of the screen with "Terminal" active, using the menu at the top of the window, click **Terminal -> New Terminal**.

A panel should now open on the bottom of the screen, with the Terminal tab active (other tabs should say Problems, Output, and Debug Console). The default terminal that is open is likely not the kind we need, so we will need to open a Git Bash terminal. On the top right of the bottom panel, there should be a dropdown box, which allows you to switch between your active terminals, with a plus button with an arrow next to it. **Click the arrow next to the plus button and then click Git Bash** to open a Git Bash terminal.

Now, on the [repository page](https://github.com/arvinsroom/mocksocialmediawebsite), click the green **Code** download button, then click **HTTPS** at the top of the panel that opens up and **click the copy button** next to the URL, which should look like a clipboard. Next, in your open git bash terminal, type `git clone` followed by a space and the repository URL that you just copied. The full command that you typed in should look something like this: `git clone https://github.com/arvinsroom/mocksocialmediawebsite.git`. Hit <kbd>Enter</kbd> on your keyboard, and the code should download into the folder you opened. You will know it has downloaded properly if the Explorer panel on the left side of Visual Studio Code populates with different files and folders and the terminal panel gives you a "done" message for unpacking objects.

You now have downloaded the core files you need for the tool, which you just need to make some slight changes to before deploying.

## Final tweaks

Third, before we turn the tool on, we will need to install some dependencies for the tool and do some simple tweaks to make it suitable for running locally. In the Explorer panel on the left side of the screen, you will see all of the folders and files for the tool within the mocksocialmediawebsite-main folder.

Right- (or if on Mac, Option-) click the **backend** folder and click **New Folder**. Name this folder `db`.

If you are on Windows, in the **Explorer** panel on the left side of the screen, you will need to open up the **package.json** file in the **backend** folder. When you click this file, it should open up as a tab in the main panel. Under `"scripts"`, find the line that starts with `"local-dev":`. Here, you will need to delete the `npm run clean-db && ` from the values in the quotes, including the space after the &&. What this line should look like is `"local-dev": "npm run copy-dev-config && npm run watch:webpack-build-dev"` Once you have done this, press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save the package.json file.

Next, right-click the **backend** folder and click **Open in Integrated Terminal**. What this will do is open a Terminal panel at the bottom of the screen that is ready for you to input commands. In the opened terminal, type `npm install` and hit <kbd>Enter</kbd>. Repeat this npm installing process for for the **frontend** folder. You can switch between these open terminals using the dropdown at the top-right of the Terminal panel, which is helpful to know for deploying the tool.

#### If you could not add node to your path variable when installing and are getting errors

You will need to replace the `npm` in the command with the pathway to the location of the npm executable that was installed on your device, surrounded by single quotes. The default for this is `'C:\Program Files\nodejs\npm'`. So, to run `npm install`, you would instead type `'C:\Program Files\nodejs\npm' install`.

You should now have the local file configuration ready to deploy the tool locally and turn it on and off whenever you wish. You will not need to repeat any of the steps above again when you want to turn on or off the tool.

### 

## Deploying

Deploying the study requires turning on the backend (i.e., the parts of the website that interface with the database) and frontend of the website (i.e., the parts of the website you can see and interact with) one-by-one. It does not matter which order you do this in, but both need to be done for you to be able to use the tool.

### Turning on the backend

In the backend terminal, type `npm run local-dev` and hit <kbd>Enter</kbd>.

#### If you could not add node to your path variable when installing and are getting errors

You will need to install [Cygwin](https://www.cygwin.com/). When installing, keep the default options on the setup page where you have to select packages and click next. Once this is installed, you will need to open new **Bash** terminals using the arrow next to the plus button in the Terminal panel for each of the backend and frontend. Once you do, in each of these terminals, you will need to navigate to the respective frontend and backend folders. A template format for the command you need to input to navigate to the folders is `/cygdrive/c/Folder\ Name/Second\ Folder\ Name/mocksocialmediawebsite-main/backend` where it must start with `/cygdrive/`, and the remainder of the path is simply the path to your folder, but with a backslash in front of spaces in any folder names.

### Turning on the frontend

In the frontend terminal, type `npm run start-dev` and hit <kbd>Enter</kbd>.

### Success!

Once you turn on the frontend, your default browser should automatically open up http://localhost:8080/ which is the main URL of your deployed tool! **Congratulations, your tool is live!** The tool is deployed via your browser, but exists entirely locally on your device. You can now go to http://localhost:8080/admin and log in using the default admin credentials:
* Username: `test`
* Password: `testtest`

You can change what these credentials are, or how many administrator accounts there are, by clicking, modifying, and then saving (by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd>) the **config-development.json** file in **backend** folder in Visual Studio Code.

The backend and frontend will continue to run as long as you have these terminals open and do not turn off the tool, and all of the condition data should remain, even after you turn off the tool, for the next time you turn it back on.

### Turning off the tool

To deactivate the backend and/or the frontend, press <kbd>Ctrl</kbd> + <kbd>C</kbd> on your keyboard in their respective terminals. It is good practice to deactivate each when you are done collecting participants in a session so that they are not taking up unnecessary resources on your device.

## Updating the code

To update the tool in the future, open a git bash terminal in the mocksocialmediawebsite-main folder (should be the default folder if you use the arrow next to the plus icon in the Terminal panel) and input the command `git pull https://github.com/arvinsroom/mocksocialmediawebsite.git`. Please note that when you do this, it may overwrite files you have modified (e.g., admin credentials, tweaks to work locally or on Windows) which you may have to repeat. It is recommended that you save all the study data prior to updating the code, as changes could affect the database.

If you're having issues, you can learn more about the git pull and related commands [here](https://github.com/git-guides/git-pull).
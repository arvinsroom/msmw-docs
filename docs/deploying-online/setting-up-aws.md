---
id: setting-up-aws
title: Setting up Amazon Web Services
sidebar_position: 2
---

In order to deploy the Tool online, you will need a place online to store the Tool's files as well as a database to store its data. For this, we will be making use of Amazon Web Services (AWS), a suite of tools offered by Amazon. The instructions below are somewhat specific to using AWS, but the Tool can very similarly be set up on any other online cloud computing platform (e.g., Google Cloud, Microsoft Azure, your own custom solution) because the underlying technologies the Tool depends on are generic and widely available.

You can find a video tutorial going through the whole process here, which I highly recommend people watch when setting up the Tool online:

<iframe width="100%" height="315" src="https://www.youtube.com/embed/SY5jl_4QpZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Required software and services

While we will be setting up the Tool online, we will still need some software installed locally to make tweaking and publishing the code easier.

### Visual Studio Code 

[Download here](https://code.visualstudio.com/).

Visual Studio Code is a code editor. You could do everything you need to do to set the Tool up using a combination of a basic text editor (e.g., Notepad on Windows) and command-line interfaces (e.g., Command Prompt on Windows, Terminal on Mac/Linux), but Visual Studio Code makes everything significantly easier. You could also use any other dedicated code editing software of your choice in place of Visual Studio Code, such as such as [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/), but Visual Studio Code is what this guide will focus on.

### Git and Bash

[Download here](https://git-scm.com/downloads) (installs both Git and Bash together).

Git is distributed version control software; essentially allowing for quick and efficient ways for multiple people to download, update, and upload files or just select parts of file, which makes it ideal for handling code. Bash is a command-line language which allows you to execute various commands on your device and run scripts. You can watch a short video on how to install Git [here](https://youtu.be/SWYqp7iY_Tc?t=344).

### Other

You will also need a [GitHub account](https://github.com/) to be able to publish your modified code to. GitHub is a free code repository for developers, and is where the Tool's source code is hosted. You will need an account to push data locally.

Finally, **you MUST have already obtained a domain name at this point to proceed**. If you have not done so as of yet, please see the previous tutorial [here](https://docs.studysocial.media/docs/deploying-online/domain-name).

## Getting Started with Amazon Web Services

To start, you will need to **sign up for an Amazon Web Services Free Tier account**, which you can do [here](https://aws.amazon.com/free/). The Free Tier will provide you with everything you will need to host the Tool, for free, for 12 months from the time you start adding the necessary services. Afterwards, you will be charged based upon your usage of the relevant services from Amazon, which will be minimal (estimated ~$35 CAD/month) or zero if you choose to turn the services off for the time that you are not using the Tool. You will need to provide Amazon with a credit card on record just in case you go over the limits of what their free services allow, but this is unlikely. In this tutorial, we will also be making use of Amazon's Route 53 to simplify the setup process, which does cost a few cents-to-dollars every month to use. You can find a tutorial on setting up AWS accounts by Amazon [here](https://youtu.be/v3WLJ_0hnOU), for your reference.

Once you have your account and are on the AWS Management console page (should have a URL containing `aws.amazon.com/console/home`) you should **change your server location to that which you are located in and/or sampling from**. You can do this by going to the upper right of the page, where to the left of the Support dropdown, there will be another dropdown that is labelled with the server location you are connected to. For example, because I am in Canada, I clicked that dropdown and selected Canada (Central). Choosing a server that is close to the population you are sampling from will reduce the latency between your participants and the server; meaning that they will be able to load the website faster. The difference this makes is often minimal, but every bit helps as internet access and speeds vary from person-to-person.

## Creating the RDS (database) instance

The first thing we will need is to set up a database instance to save data (this includes both study conditions and participant data) to. For this, we will make use of **Amazon's Relational Database Service, or Amazon RDS**. From the management console page, click the **Services** dropdown on the left of the navigation bar at the top of the screen, and under Database, select **RDS**. You will now be on the RDS dashboard page (it should say Amazon RDS at the top of the panel on the left side of the screen). On this page, **make sure once again that you are in the desired server location before proceeding** (it will work regardless but will reduce latency if they are the same for all AWS services you use).

From the **Create database** panel on this page, click the orange **Create database** button. Now that you are on the Create database page, create a new database with the following settings:

* **Choose a database creation method:** Standard create
* **Engine options:**
    * **Engine type:** MySQL
    * **Edition:** MySQL Community
    * **Version:**  MySQL 8.0.20
* **Templates:** Free tier
* **Settings:**
    * **DB instance identifier:** You can use any name you would like. For the purposes of this tutorial, we will be using `mocksocialdb`
    * **Master username:** You can use any username you would like. For the purposes of this tutorial, we will be using `admin`. Make sure that the actual username you use is unique for your own security.
    * **Master password and Confirm password:** You can use any password you would like. FOr the purposes of this tutorial, we will be using `EPkXi%8dnB3de52W`. Make sure that the actual password you use is unique for your own security.
* **DB instance class:**
    * **DB instance class:** Burstable classes (includes t classes), db.t2.micro
* **Storage:**
    * **Storage type:** General Purpose SSD (gp2)
    * **Allocated storage:** 20 GiB
    * **Storage autoscaling:** Uncheck Enable storage autoscaling 
* **Connectivity:** 
    * **Virtual private cloud (VPC):** Default VPC
    * **Subnet group:** You should only have one option available which is that of the default vpc (i.e., its name should begin with `default-vpc-`)
    * **Public access:** No
    * **VPC security group:** Choose existing
    * **Existing VPC security groups:** default
        * Note: For the purposes of this tutorial, I created a new security group called `security-tutorial`.
        * Note: When you select a VPC security group, it will show up as a tag underneath the dropdown with an X next to it if you want to remove it. If you see `default` in a blue box underneath the dropdown already, the default VPC security group is already selected and you can move on.
    * **Availability Zone:** No preference
        * Note: You can select a certain server within a server location you would like to funnel everyone accessing your website to, but this is only beneficial for very specific use cases and is thus not recommended.
* **Database authentication:** Password authentication

You will not need to make any changes in the Additional configuration panel. Once you have specified everything, click the orange **Create database** button at the bottom and you are done! You can find a tutorial on setting up RDS instances by Amazon [here](https://youtu.be/nBXYtyTzHJE), for your reference.

:::caution Leaving storage autoscaling checked
If you do not uncheck the "Enable storage autoscaling" option when creating your RDS database instance, the server will use more storage than it is allocated if requests to the database go beyond the allocated threshold. This can make you vulnerable to distributed denial-of-service (DDoS) attacks which spam your website with requests which can exponentially increase your storage usage, and how much you have to pay as a result. If Amazon detects a DDoS attack they can refund you, but you don't want to take the risk.
:::

## Increasing the maximum packet size

With our database created (which you can verify by checking if its Status shows up as "Available" on the Databases page of the RDS Dashboard), we will need to increase its default maximum of information that can be transmitted to and from the server at any given time from 4MB to 20MB. This makes it easier to upload media associated with your posts and prevents issues with participants uploading files larger than 4MB (e.g., large photos, videos).

When in the Amazon RDS Dashboard, use the menu on the left to navigate to the **Parameter Groups**. When on the Parameter groups page, click the orange **Create parameter group**. You can give the parameter group any name (for the tutorial, we used `parameter-tutorial`) and any description (for the tutorial, I used `This is the parameter group for the deploying online tutorial.`), but ensure that the **Parameter group family** is set to `mysql8.0`.

Once your new parameter group is created, click on it from the Parameter groups page. In the **Parameters** panel, use the search bar to filter through the parameters and find **max_allowed_packet**. Click the check box next to **max_allowed_packet** (*not* mysqlx_max_allowed_packet) and click the orange **Edit parameters** button. Once you do, you will now be able to edit the number in the **Values** column, which you should change to `20000000` (in bytes; which is approximately 20MB) and then click the orange **Save changes** button. The change might not be reflected immediately on the parameter groups page, and you may need to navigate away from and back to the page to confirm.

### Assigning the parameter group

Now, you will need to assign this parameter group to your database. Using the menu on the left, navigate to the **Databases** page. Click on the name of your database in the Databases panel and then click **Modify** at the top right corner when on the database's dedicated page. Now, scroll down to the **Additional configuration** panel and, under **Database options**, change the **DB parameter group** to the parameter group that you just created. While you are here, you can also change the **Backup retention period** to 1 day, which should be all that you need and free up more database resources for saving and retrieving participant data. Save this by clicking the orange **Continue** button at the bottom. When given the summary of changes and option for when to apply these changes on the following page, choose to **Schedule immediately**, then confirm the changes you're making on the following page by clicking the **Modify DB instance page at the bottom**. Once you havw successfully modified the instance, you will have upped the maximum packet size to 20MB for your database. 

## Creating the EC2 (storage) instance & obtaining the .pem file

For storing the Tool's files, as well as any files that might be uploaded by experimenters (such as conditions and stimuli) or participants (such as post media), we will be making use of **Amazon Elastic Compute Cloud (EC2)**. To navigate to the EC2 dashboard, click the **Services** dropdown on the left of the navigation bar at the top of the screen, and under Compute, select **EC2**.

To create an EC2 instance, which is essentially our own server on AWS that we can store stuff on, in the **Launch instance** panel, click the orange **Launch instance** button and select **Launch instance** from the dropdown. On the subsequent pages, configure your EC2 instance as follows:

* **Step 1: Choose an Amazon Machine Image (AMI):** Amazon Linux 2 AMI (HVM), SSD Volume Type, 64-bit (x86)
    * Note: You can easily find this if you check the Free tier only box on the left, but it should be the topmost option by default. It should also have the x86 version selected by default.
* **Step 2: Choose an Instance Type:** With the filter set to `All instance families` and `Current generation`, select the one with `t2.micro` in the Type column, which also has a green label underneath that says it is Free tier eligible. Then click **Next: Configure Instance Details** to continue.
* **Step 3: Configure Instance Details:** Use the defaults presented to you, while ensuring that for **Network**, the default VPC is selected. Click **Next: Add Storage** to continue.
    * Note: It is critical that the VPC associated with the RDS instance is the same that is associated with the EC2 instance, as this is what allows them to communicate with one another. These instructions ensure this, but it is important to note.
* **Step 4: Add Storage:** Use the defaults for the storage volume they present to you, but change its **Size (GiB)** to `30` and change the **Encryption** to **(default) aws/ebs**. Click **Next: Add Tags** to continue.
* **Step 5: Add Tags:** We will not need to do anything here, so click **Next: Configure Security Group** to continue.
* **Step 6: Configure Security Group:** For **Assign a security group**, choose **Select an existing security group** and select your default security group. Leave the inbound and outbound rules as-is for now. Click **Review and Launch** to continue.
    * You may get an error saying *Warning: You will not be able to connect to this instance as the AMI requires port(s) 22 to be open in order to have access. Your current security group doesn't have port(s) 22 open*. We will fix this later, so just continue for now.
* **Step 7: Review:** Click **Launch** to finish setting up the EC2 instance.

Once you click Launch, Amazon will give you the option of creating a new key pair and downloading yoru unique private key (which matches with the public key that Amazon holds to authenticate access to the instance). Choose a **Key pair type** of RSA, and give the key pair a name (for this example, I have called it `mocksocial`) and download the .pem file to your computer. This file contains a private key that is used to authenticate access to the EC2 instance. **It is critical that you save this .pem file to your computer in a secure location and you do not lose it**, as you will need it later when uploading the Tool to the server. Click **Downlaod Key Pair** and once you have securely stored the .pem file, you click **Launch instance** to complete setting up the EC2 instance. In case you lose your .pem file, you can consult [this video](https://youtu.be/F8jXE-_hdfg).

On the Instances page under Instances in the menu on the left of the EC2 Dashboard, you will be able to check the status of the newly-created EC2 instance under the Status check column. It will start as "Initializing?, but within a few minutes will change to a checkmark with a note about it passing checks, indicating that it is active.

## Configuring the inbound and outbound rules

Next, we will need to configure the inbound and outbound rules on both the RDS and the EC2 instances with the correct security settings for who should be able to access them. These steps ensure that random data cannot be injected into the database or unauthorized users cannot query it - only people using the Tool that is hosted on the EC2 instance. Essentially, these steps configure who the instances can connect to and exchange information from.

### RDS instance

From the RDS dashboard, go to **Databases** on the menu in the left, and then click on the name of your database in the **Databases** table on the opened page. Scroll down to the **Security group rules** panel and select the default security group to open it in a new tab.

On this page, select the **Inbound rules** tab and click **Edit inbound rules**. There, you can click **Delete** next to any existing rules and click **Add rule** in the bottom-right of the Inbound rules panel to add the only rule that you need. Specify this rule as follows: IP version = IPv4, Type = MySQL/Aurora, Protocol = TCP, Port range = `3306`, and Source = Custom. The Source for this rule, which you will input in the field with the search icon in it, should be the **Private IPv4 address of the EC2 instance you just created**. This is as such because we want the EC2 instance to be the only thing that can send queries or data into the RDS database. You can check this by going to the EC2 Dashboard, selecting **Instances** under **Instances** in the menu on the left, then looking at the third column in the **Instance Summary** panel. You can use the copy button next to the Private IPv4 address to quickly copy it. When you input it into the Source field, it will show a dropdown menu option with the Private IPv4 address of your EC2 instance followed by a `/32`, under a CIDR blocks subheading. For example, if the Private IPv4 address is `1.2.3.4`, the option you select should read `1.2.3.4/32`. Click this option to add it as the custom Source, and click **Save rules** at the bottom.

Once you've been redirected back to the **Security Groups** page with your security group selected, click the **Outbound rules** tab and ensure that there are no outbound rules for this security group. If there are, delete them like you would delete preexisting inbound rules.

### EC2 instance

Instead of the default security group, which is configured specifically for the RDS database, we will need to create a new security group that is configured specifically for the EC2 instance - because, unlike the RDS instance, it needs to be accessible publicly to users all across the Internet and privately to you as the person setting up the EC2 instance - and assign it to the EC2 instance.

From the EC2 dashboard, click **Security Groups** under the **Network & Security** heading in the menu on the left, and then click the **Create new security group** button on the top-right of the Security Groups panel. Give it any name and description you'd like (for this tutorial, I named it `security-tutorial-2`), and select the same VPC that is shared between the RDS and EC2 instances that you created (which should be the default one).

Under the **Inbound rules** panel, you will need to ensure that only the following five inbound rules are present:
* Type = Custom TCP, Protocol = TCP, Port range = `80`, with a custom Source of `0.0.0.0/0` selected from the search bar's dropdown.
* Type = Custom TCP, Protocol = TCP, Port range = `80`, with a custom Source of `::/0` selected from the search bar's dropdown.
* Type = Custom TCP, Protocol = TCP, Port range = `22`, with a custom Source of `0.0.0.0/0` selected from the search bar's dropdown.
  * Note: This inbound rule allows you to access the storage of the EC2 instance remotely, which you will need to do when configuring it.
* Type = Custom TCP, Protocol = TCP, Port range = `443`, with a custom Source of `0.0.0.0/0` selected from the search bar's dropdown.
* Type = Custom TCP, Protocol = TCP, Port range = `443`, with a custom Source of `::/0` selected from the search bar's dropdown.

Under the **Outbound rules** panel, you will need to ensure that only the following outbound rule is present:
* Type = All traffic, Protocol = All, Port range = All, Destination = Custom, with a Source of 0.0.0.0/0

When you're done, click **Create security group** at the bottom.

To assign the security group, navigate to your instance by clicking **Instances** under **Instances** in the menu on the left of the EC2 Dashboard and then clicking the Instance ID of your EC2 instance. Int he Instance summary panel, click the **Actions** button on the upper-right, and under **Security**, select **Change security groups**. Under the **Associated security groups** panel, click **Remove** next to the default or preexisting security group, and, using the search bar, select your newly created security group (in our example, `security-tutorial-2`) and click **Add security group**. Click the **Save** button at the bottom to finish changing the security group on the EC2 instance.

## Verifying EC2 and RDS instances share a VPC

At this point, despite having set this earlier, it is important to verify that the EC2 instance and the RDS instance are both active and able to communicate with one another via the same VPC.

For the EC2 instance, you can find this information by going to **Instances** under **Instances** in the menu on the left of the EC2 Dashboard, and then clicking the Instance ID of your EC2 instance. In the Instance summary panel, you can verify it says *Running* under the *Instance state* subheading, and see what VPC it is connected to under the *VPC ID* subheading.

For the RDS instance, you can find this information by going to **Databases** in the RDS Dashboard and clicking your database's name on the following page. You can verify that the RDS instance is active if you see *Available* under the *Status* subheading of the Summary panel. In the Connectivity & Security tab, you can verify the VPC the instance is connected to under the *VPC* subheading of the *Networking* column.

## Associating an elastic IP with the EC2 instance

While the security on our EC2 storage now allows people to access the Tool, people cannot navigate to it until we assign an IP to the EC2 storage. To do this, from the EC2 dashboard, under **Network and Security** in the menu on the left, select **Elastic IPs**. If it has not been done so already (and you don't see an elastic IP address already associated with your EC2 instance in the table), in the **Elastic IP addresses** panel, you will need to click the orange **Allocate Elastic IP address** button.

For the **Elastic IP address settings**, under **Public IPv4 address pool**, select **Amazon's pool of IPv4 addresses**. Leave everything else as is and click the orange **Allocate** button to proceed. This will allocate you an IPv4 address which should auto-connect to the EC2 instance; you can verify this by cross-referencing the **Associated instance ID** for the elastic IP in the **Elastic IP addresses** table with the instance ID for your instance, which can be found in your list of instances that you can see by selecting **Instances** under **Instances** in the menu on the left while in the EC2 dashboard.

If the elastic IP address does not auto- does not auto-connect or you do not see an Associated instance ID next to the elastic IP you just allocated, then you will need to select the elastic IP using the checkbox to the left of it, click the **Actions** button at the top of the Elastic IP addresses panel, and then click **Associate Elastic IP address** from the dropdown. From here, select **Instance** under Resource type, then select your instance from the **Instance** search bar, and click **Associate**. Now, your EC2 instance should have an IP address that is associated with it.

You may need to navigate away from and back to the Elastic IPs settings page to see the changes you've made updated.

## Connecting your domain name with Route 53

Now that the EC2 instance has an IP address associated with it so that it can be accessed, we can associate the domain name with the instance so that it is easier and safer to navigate to (vs. just an IP address). To do this, we will give Amazon permission to manage the domain name and connect it to our Amazon EC2 storage. This is not the only way to go about this, but it does save additional steps which is why we will focus on this one method.

However, it is worth noting that use of Amazon's Route 53 will incur some minor costs on the researcher (in the cents-to-dollars) as it is not included in Amazon's Free Tier of services.

### Modify DNS records in your registrar settings

Once logged into your domain registrar's website, you will need to find out how to add DNS records for your domain. This will vary depending on the registrar you used to buy your domain name, but every registrar should have this option somewhere, often under advanced DNS management settings. Make sure to consult your registrar's support section or Google how to do this for your registrar if you have difficulty. Amazon links to instructions on how to do this for popular registrars under [point 7 on this page](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domain-procedure.html).

You will need to two nearly-identical host DNS records to your domain. Both will have a **Type** of an `A Record`, a **TTL** of `Automatic`, and a **Value** that corresponds to the Public IPv4 address of your EC2 instance. You can find this address in the second column in the Instance summary panel for your EC2 instance (found after going to **Instances** under **Instances** in the menu on the left of the EC2 Dashboard, then clicking on your EC2 Intance ID). The only difference between these two records will be that one will have a **Host** of `@`, and the other will have a host of `www`. Save these changes and you are ready to continue.

### Configure Route 53

Next, you will need to set up Amazon's Route 53, which is a service that helps route traffic to your domain name. Before navigating to Route 53, make sure to copy the **Public IPv4 DNS** of your EC2 instance, which can be found in the third column of the Instance summary panel for your EC2 instance, which can be found by clicking **Instances** under **Instances** in the menu on the left of the EC2 Dashboard, then clicking your instance's Instance ID.

You can navigate to Route53 by clicking **Services** in the navigation bar while anywhere in AWS, and selecting **Networking & Content Delivery**, then **Route 53**. In the menu on the left, select **Hosted zones**, and click the orange **Create hosted zone** button on the following page.

In the Hosted zone configuration panel, enter your domain name without adding any prefixes such as www. or http:// (for my example, I entered simply `quadtalk.app`), select **Public hosted zone**, then click the orange **Create hosted zone** button.

Once the hosted zone is created, you will be redirected to a page showing two newly-created records that are associated with your domain. You wil need to modify the top record, which should have a Type of `NA`. When you click the checkbox next to that record, a panel should open up on the right, where you can click the **Edit record** button. The fields on the panel should open allowing you to edit them. In the *Value* field, there should be several addresses there already, and you will need to create a new line at the very bottom and paste the Public IPv4 DNS of your EC2 instance that you copied earlier from your EC2 instance's Instance summary page. When done, click the orange **Save** button at the bottom, and Amazon should now have full permissions to manage your domain name, including associating it with your EC2 instance. 

## Creating and associating the IAM role

Next, we will need to configure the rules by which the various Amazon Web Services can send and receive information from one another; most notably the EC2 instance. Amazon's Identity Access and Management, or IAM, is designed to manage this through the creation of roles which comprise one or more groups of policies that dictate which rules are in place.

First, navigate to Amazon IAM by clicking the **Services** button in the navigation bar while anywhere in Amazon Web Services, then click **Security, Identity, and Compliance**, then **IAM**.

From the IAM Dashboard, click **Roles** in the menu on the left. We will need to create a new role, which you can do so by clicking the **Create role** button in the upper-right of the Roles page.

On the first page, under *Select type of trusted entity*, select **AWS service**, and under *Choose a use case*, select **EC2**. Afterwards, click the **Next: Permissions** button at the bottom to proceed.

On the second page, you will need to use the search bar to find and check off the boxes next to two policy groups `CloudWatchAgentServerPolicy` and `AmazonSSMFullAccess`. When you check off a policy group, it remains selected even when you start searching for another policy group. Once both are selected, click the **Next: Tags** button at the bottom to proceed.

On the third page, you will not need to add any tags, so you can just click the **Next: Review** button to proceed to the fourth page. On the fourth page, you need to give the Role a name, which can be anything you like (for this example, I used `tutorial-role`). Once that is done, you can click **Create role** at the bottom to finish creating the role.

### Associating the role to the EC2 instance

To associate the role with the EC2 instance, navigate to the Instance summary page for your instnace, by clicking on **Instances** under **Instances** in the menu on the left of the EC2 dashboard, and then clicking your instance's Instance ID. Once there, click the **Actions** dropdown, select **Security**, then click **Modify IAM role**. On the following page, use the dropdown to select the name of the IAM role you just created, and click the orange **Save** button at the bottom to finish associating the role with the EC2 instance.

## Downloading the code

Before we deploy our code online, we will need to download it locally and make the necessary modifications and personal customizations to the base code beforehand.

On your computer, create a new folder that will house all the files for the Mock Social Media Website Tool. For this example, I called this folder `Code`.

Next, open up Visual Studio Code. When opening it for the first time, you should see a "Getting Started" document that is open. Using the menu at the top, click **File -> Open Folder...** and open the folder that you just created.

With this folder open in Visual Studio Code, you will need to open a Git Bash terminal. If there isn't already a panel open on the bottom of the screen with "Terminal" active, using the menu at the top of the window, click **Terminal -> New Terminal**.

A panel should now open on the bottom of the screen, with the Terminal tab active (other tabs should say Problems, Output, and Debug Console). The default terminal that is open is likely not the kind we need, so we will need to open a Git Bash terminal. On the top right of the bottom panel, there should be a plus button with an arrow next to it. **Click the arrow next to the plus button and then click Git Bash** to open a Git Bash terminal. A subpanel should then open up on the right of the terminal panel listing all the terminals you have open, which should include the default terminal and the Git bash terminal that you just opened. You can **click the garbage can icon next to the default terminal** to close it for keeping our working area clean (often, this garbage can icon only appears upon hovering over the terminal name).

Now, navigate to the [repository page](https://github.com/arvinsroom/mocksocialmediawebsite) in your web browser. On this page, click the green **Code** download button, then click **HTTPS** at the top of the panel that opens up and **click the copy button** next to the URL, which should look like a clipboard. Next, in your back in your git bash terminal open in Visual Studio Code, type `git clone` followed by a space and the repository URL that you just copied. The full command that you typed in should look something like this: `git clone https://github.com/arvinsroom/mocksocialmediawebsite.git`. Hit <kbd>Enter</kbd> on your keyboard, and the code should download into the folder you opened.

You will know it has downloaded properly if the Explorer panel on the left side of Visual Studio Code populates with a new folder titled `mocksocialmediawebiste` and the terminal panel gives you a "done" message for unpacking objects. Before proceeding, you will need to open this `mocksocialmediawebsite` folder in place of the `Code` folder you are currently, in, which you can do by clicking **File -> Open Folder...** and open the `mocksocialmediawebsite` folder. Now that you have the files downloaded, we're ready to tailor them to your setup.

## Configuring the config-production.json file

Next, we will be making tweaks the code of the Tool using Visual Studio Code to prepare it for deployment online. With the `mocksocialmediawebsite` folder open, you can use the panel on the left to navigate through the various subfolders and files of the Mock Social Media Website Tool. You can expand or collapse subfolders by clicking on the arrow icons beside their names.

In the **backend** folder, we will need to modify the **config-production.json** file to match the settings we specified earlier when setting up the RDS database instance, create our admin (i.e., researcher) credentials, and add random strings of characters to assist with data encryption. Each of these will need to be entered into the quotes provided next to each of their respective fields.

Under the *database* subheading, you will need to add information about your RDS instance, so it is helpful to simultaneously have your RDS . You can do this by going to **Databases** page via the menu on the left in the RDS Dashboard. Here, the name that your database has under the *DB identifier* column is what you would input as the *name* in the config-production.json file (for this example, it is `mocksocialdb`). The username and password will be the master username and password that you created when you set up the RDS instance (for this example, they are `admin` and `EPkXi%8dnB3de52W` respectively).

Here, you will also need to input the endpoint and port for your database under the *host* and *port* fields. You can find these by clicking on the name of your database on the **Databases** page in the Amazon RDS settings, and looking at the **Endpoint & port** heading in the **Connectivity & security** panel. The port will default to `3306` (this will need to match whichever port you chose when modifying the security group, but in most cases leaving as 3306 will be fine), but the *host* will need to correspond to the address that is underneath the *Endpoint* subheading. Last, you should leave the *dialect* as `mysql`. Altogether, using this example, the first section of the config-production.json file should look something like this:

```
{
  "database": {
    "name": "mocksocialdb",
    "username": "admin",
    "password": "EPkXi%8dnB3de52W",
    "host": "mocksocialdb.ch8pmurklo7i.ca-central-1.rds.amazonaws.com",
    "port": "3306",
    "dialect": "mysql"
  },
```

In the next section, you can specify as many researcher accounts as you like. Remember, each researcher's created studies and participant data are completely independent from and inaccessible by other researchers. You can do so using the following format, ensuring that there are no spaces in the usernames or passwords:

```
  "adminCredentials": [
    {
      "username": "researcher1",
      "password": "password1"
    },
    {
      "username": "researcher2",
      "password": "password2"
    },
    {
      "username": "researcher3",
      "password": "password3"
    }
  ],
```

In the final section of this file, you will need to put in **secret** and **secretUser** keys. These can be any string of numbers and words (without spaces), and are used to encrypt and decrypt information as it is transmitted between the EC2 instance (where the Tool is stored that participants interact with) and the RDS database. What these keys actually are does not matter as much as they are unique and hard to guess. You can use random hash generator tools like [this](https://www.ipvoid.com/random-sha256-hash/) to generate relatively secure keys such as those I used in the example below:

```
  ],
  "secret": "87da0c6d48223c90f970e2b79ef2ac39896a2d11d70f9ebd86644830c594c81f",
  "secretUser": "7f1b7dfee409e9d5f176a417507cfc2758e5ef08beab0ca866973535c7223f4f"
}
```

Once this file is fully-configured, make sure to save it before proceeding (in Windows, the shortcut for this is <kbd>CTRL</kbd> and <kbd>S</kbd>).

## Substituting your domain name in the code

With the code still open in Visual Studio Code, you will need to edit several other files in the code to replace the default domain name (which is `studysocial.media`) with the one you have purchased (for this example, `quadtalk.app`). Make sure to save all of these files after modifying them, before moving on to the next set of instructions.

### server.js file

In the **backend** folder, you will need to modify the **server.js** file. Towards the ending of the document, you will need to replace the domains on line 135. Lines 134 to 136 should look something like this after replacing the default domain name:

```
  var corsOptions = {
    origin: environment === 'development' ? ['http://localhost', 'http://localhost:8080'] : ['https://quadalk.app', 'https://www.quadtalk.app'],
  };
```

### nginx.conf file

In the **frontend** folder, open up the **nginx.conf** file. Within this file, you will need to replace the default domain names on lines 3, 16, 17, and 18. After doing so, lines 3 to 18 in the final nginx.conf file should look something like this:

```
  server_name quadtalk.app www.quadtalk.app;
  location ^~ /.well-known {
    allow all;
    root  /data/letsencrypt/;
  }
  location / {
    # redirect any traffic on http to https
    return 301 https://$host$request_uri;
  }
}

server {
  listen 443 ssl default_server;
  server_name quadtalk.app www.quadtalk.app;
  ssl_certificate /etc/letsencrypt/live/quadtalk.app/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/quadtalk.app/privkey.pem;
```

### http-common.js file

In the **src** subfolder of the **frontend** folder, you will need to modify the **http-common.js** file, and replace the default domain name on line 7. After modification, the final line 7 should look something like this:

```
  baseURL: environment === 'development' ? 'http://localhost:8081/api' : 'https://quadtalk.app/api',
```

## Connecting to the EC2 instance

With all of our files ready to go, the final stretch involves remotely connecting to the EC2 instance and executing the necessary commands to deploy it.

Start by opening the folder containing your .pem file in Visual Studio Code (for our example, `mocksocial.pem`). Remember that we saved this .pem file into a different folder from that which contains the code for the Tool.

Next, in your browser, from the EC2 Dashboard on AWS, under **Instances** in the menu on the left side, click **Instances**. Click on your instance's Instance ID, and then on the **Instance summary** panel on the following screen, click the **Connect** button in the upper-right. In the *Connect to instance* panel, select the **SSH client** tab, and you will find instructions on what to input into a terminal to gain access to the command line of the EC2 instance. At the bottom of this panel, under the *Example* subheading, you should have the a command that looks something like `ssh -i "mocksocial.pem" ec2-user@ec2-3-99-100-182.ca-central-1.compute.amazonaws.com`. This command is used to authenticate access to the EC2 instance for the holder of its private key (for this example, the `mocksocial.pem` file). Next to this command, **click the copy button**.

Back in Visual Studio Code, with the folder with the .pem file open, open a new Git Bash terminal (by using the arrow next to the plus button when you have the terminal pane open), and **paste the example command into your terminal** and hit <kbd>Enter</kbd> to enter the EC2 instance. If your connection ever times out (e.g., left terminal open too long, connecting on a different day, instance is rebooting), you will follow this exact same procedure to reconnect to the EC2 instance.

If this is your first time accessing the EC2 instance, you will likely receive a warning saying that the authenticity of the host cannot be established. This is okay since we're using Amazon's own commands to connect to the EC2 instance that they are hosting, so when you are asked if you are sure you want to continue connecting, you can type is `yes` and then hit <kbd>Enter</kbd>.

You will know that you have successfully connected to the EC2 instance if you get a little graphic made by text that reads "EC2", followed by "Amazon Linux 2 AMI", and the terminal is now awaiting entry of commands with something before it that that looks like [ec2-user@ip-172-30-1-30 ~]$. This prefix to the command line describes who (ec2-user) is accessing what (the instance located at an IP of 172.30.1.30) and where commands are set to be executed in the EC2 instance (the ~ signifies the home directory).

As you navigate through various directories within the EC2 instance later in this guide, the ~ will be replaced with the name of the current directory that you are in, which can help you get your bearings. The `cd` command allows you to **c**hoose your **d**irectory. If you just input `cd`, you will be returned to the home folder. If you input `cd` followed by a space, forward slash, and then the name of the subfolder you want to navigate into (e.g., `cd /tmp` for navigating into the tmp folder), you will be taken into the subfolder. The `cd -` command returns you to the previous folder you were in.

See [this page](https://dearsikandarkhan.medium.com/files-copying-between-aws-ec2-and-local-d07ed205eefa) in case you are having issues accessing the EC2 instance remotely.

## Installing and configuring required software on the EC2 instance

We will need to install several pieces of software inside of the EC2 instance so that they can make use of the Tool's code; most notably Git, Docker, and Docker Compose. Installing Git on the repository will subsequently help us pull our code from GitHub to the EC2 instance, while Docker and Docker compose are critical for assembling the Tool from that code.

You can do this by sequentially entering the following commands into the EC2 terminal, pressing <kbd>Enter</kbd> after each one and waiting for it to complete (which you will know either based on completion messages or returning you to the command line where you can enter new comands) before entering the next command. In case you need to troubleshoot, you can visit ([this page][https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9]) which is the source of the commands we will be entering. To make things easier and avoid errors, you can copy the following commands and paste them directly into the command line.

```
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo chkconfig docker on
sudo yum install -y git
sudo reboot
```

After you input `sudo reboot`, the EC2 instance will be restarted in order to complete installation of the software and put the changes made into effect. Rebooting will kick you out of the instance temporarily, and it will take the instance a few minutes to be accessible again. After a few minutes, the instance should be available to be connected to again, at which point you can try to input the "Example" command again (for our example, `ssh -i "mocksocial.pem" ec2-user@ec2-3-99-100-182.ca-central-1.compute.amazonaws.com`) and reconnect to the EC2 instance.

Once reconnected, we can proceed to installing Docker-compose:

```
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose version
```

The final command above verifies that Docker Compose has been installed by pulling it's version number (i.e., if it was not installed, it would not be able to display a version number).

## Installing the SSL certbot and configuring certificate autorenewal

Next, we will install a "certbot," which is an automated bot which will help secure and encrypt interactions that people have with the Tool online by installing an SSL certificate, and ensure that this is the case perpetually by automatically renewing that SSL certificate. Completing this procedure is what allows the website that the Tool is deployed to to have an https (vs. http) version that is fetched when participants visit it. It is **highly recommended** that you consult the [associated video tutorial](https://youtu.be/SY5jl_4QpZY) for these steps, as the installation of the certbot comprises some of the most difficult steps in the whole deployment process.

Before installing the certbot, you will need to run the following commands from the home directory (i.e., a location of ~ in the prefix to the command line) to install various prerequisites, including Apache Web Server. As before, you will need to enter these commands one-by-one, pressing <kbd>Enter</kbd> after each to execute, and waiting for them to complete before inputting the next. The commands are as follows:

```
sudo yum install -y httpd
cd /tmp
sudo wget -O epel.rpm –nv \
https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo yum install -y ./epel.rpm
sudo yum install python2-certbot-apache.noarch
```

To install the certbot and obtain an SSL certificate for your domain, you will need to follow all of the instructions on [this page](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html#letsencrypt), under the *Certificate automation: Let's Encrypt with Certbot on Amazon Linux 2* heading. After completing steps 1a through 1c under the *Prepare to install* heading, it is recommended that you run the `sudo yum update -y` command to update all of your packages before proceeding onto the subsequent steps.

In the subsections below, I'll provide some additional guidance on select steps to help clarify.

### Editing httpd.conf using Vim

For step 2 under the *Prepare to install* subheading, once you are in the `conf` directory where the httpd.conf file is located, you can edit the directory by entering the `vim httpd.conf` command and hitting <kbd>Enter</kbd>. This command opens the httpd.conf file using Vim, which is a text editor built into many Linux operating systems (of which the EC2 instance is running), and temporarily converts your terminal into a file viewer and editor. As such, it is recommended that you make your terminal panel larger so that you're able to see more of the document.

When you are editing the httpd.conf or any other file using Vim, the user interface and a different set of commands specific to Vim are used to interact with the document. The majority of the terminal panel shows the document you are viewing, whereas the last line of your terminal panel is an unlabelled command line. You can tell where the comamand line is by looking on the right of it, where you will see the row and column of the document you have selected alongside how far through the document you are (starts at 1,1) and how far down you are in the document (e.g., Top or 8%) which stays static alongside the command line through scrolling up and down through documents).

Once the document is open, you can use your device's arrow keys to move your cursor through the document. Once you have navigated to a place you want to insert information - in the case of this step, after the `Listen 80` text - you can enter instant mode by hitting <kbd>I</kbd>. The command line will now show `-- INSERT --` to reflect that you are now in insert mode. In insert mode, you can type directly into the file like you would in any other text editor, as well as paste information; which you will need to do for the code Amazon asks you to paste in step 2. After pasting the required code, make sure to edit the default `example.com` domain names to your purchased domain name. For this example, with the `quadtalk.app` domain, the pasted parts looked something like this:

```
<VirtualHost *:80>
    DocumentRoot "/var/www/html"
    ServerName "quadtalk.app"
    ServerAlias "www.quadtalk.app"
</VirtualHost>
```

When you're done making these changes, you can exit insert mode by hitting <kbd>Esc</kbd>. To complete configuration, we will need to enter a few more commands into the command line. You can do this by clicking on the empty space in the command line and entering `:w !sudo tee % > /dev/null` and hitting <kbd>Enter</kbd>. The command line will give you a warning, but just press <kbd>O</kbd> to say okay and continue. Following this, type `:q!` to save the file, exit the Vim editor, and return to the EC2 instance's command line.

### Editing crontab using sudo

For steps 1 and 2 in the *Configure automated certificate renewal* subheading, you will also be modifying a file, which can be done using Vim or simply the sudo command (the command Amazon recommends is `sudo crontab -e`). For this example, we will use the default sudo command to modify the file. It is worth noting that to navigate to the etc directory, you will need to start from the home directory, which you can quickly return to by simply entering the `cd` command and hitting <kbd>Enter</kbd>.

When you open the crontab file, you will find an editor similar to the Vim editor, whereby all but the bottom line is document viewing and editing area. The crontab document should be empty to start (lines with a single ~ in them indicate empty space). Similar to Vim, hitting <kbd>I</kbd> will enter insert mode, where then you can paste the code from step 2 under the *To automate Certbot* subheading, and then hit <kbd>Esc</kbd> to exit insert mode. To save and exit, click on the command line, enter `:wq!`, and hit <kbd>Enter</kbd>. In these exit commands, the `w` saves the document, the `q` exits the document, and the `!` forces these commands to occur without the console asking more questions of you.

### Verifying SSL certificate and domain is active

Once you have finished going through the certbot instructions provided by Amazon, you can verify that your domain name is connected to the EC2 instance and has SSL encryption by visiting your domain name into your browser window. If the page loads and shows a red and white test page, your domain name has been successfully connected to your EC2 instance. If (in most browsers), your domain name has a locked lock icon next to it in the address bar, and if you click on it it tells you that the connection is secure and/or that the site is providing a valid certificate, you have successfully enabled SSL encryption on your EC2 instance. You can also verify that SSL encryption is valid if you click on the address bar and see https:// before your domain name (for this example, `https://quadtalk.app`).

## Installing and configuring MySQL on the EC2 instance

Before we upload the code to the EC2 instance, we need to go into the EC2 instance and install database software that can interface with the RDS instance. From the home directory (i.e., ~), enter the command `sudo yum install mysql`, which will install MariaDB - Amazon's brand of MySQL software (MySQL, if you remember, is the type of database we are using). Part-way through installation, it will ask you if the download size is okay, to which you can hit `y` followed by <kbd>Enter</kbd> to proceed.

Once installation is complete, you will need to run a command using specifics from your RDS database, so it is helpful to have your RDS instance's page open on AWS. You can get there by going to **Databases** in the menu on the left of the RDS Dashboard, and clicking your database's DB identifier.

The structure of the command is as follows and in the following order, with each separated by a space:
* `mysql`
* `-h`
* The endpoint for your RDS database, which can be found in the *Connectivity & security* panel on your RDS instance's page, under the *Endpoint & port* subheading. For our example, this was `mocksocialdb.ch8pmurklo7i.ca-central-1.rds.amazonaws.com`.
* `-P`
* The port for your RDS database, which can be found in the same place as the endpoint. For most, this will be `3306`.
* `-u`
* The master username used to set up the RDS database. If you don't remember, this can be found in the modified config-production.json file in the Tool's code, in the `"username"` field. For this example, the master username is `admin`.
* `-p`

Altogether, the command you enter should look something like `mysql -h mocksocialdb.ch8pmurklo7i.ca-central-1.rds.amazonaws.com -P 3306 -u admin -p`. Immediately afterwards, the console will ask you for your password, which can also be found in the config-production.json file in the `"password"` field (for this example, the password is `EPkXi%8dnB3de52W`). Importantly, whether you type or paste in your password, you will **not be able to see what you are entering in the command line**. However, whatever you are typing is indeed being typed in, it is just that the command line does not use any placeholder characters like dots or stars to give you any visual feedback from entering text. Once you have typed it in, you can hit <kbd>Enter</kbd>.

If you receive a message that welcomes you to the MariaDB monitor and changes the prefix of the command line to something like `MySQL [(none)]>`, it means that you have succesfully set up MySQL on your EC2 instance. As we are done with MySQL, you can enter `\quit` into the command line to return to your EC2 instance's command line.

## Uploading the code to a GitHub repository

With the database ready to go, you will need to upload the modified code for the Tool that currently exists locally on your device to a GitHub repository to then be able to copy it into your EC2 instance. At this stage, you must have a GitHub account to proceed.

Once logged in, from the GitHub homepage, you will need to create a new repository by **clicking the green New button** at the top-left of your screen. You can give this repository any name you want (for this example, a repository name of `mocksocial`) was used. Ensure that you are the Owner, and that **the respository is set to Private, NOT Public.** The Tool's code contains sensitive information about the endpoints, usernames, and passwords through which your database can be accessed, so by ensuring that the repository is Private you can ensure security of your personal information. **Make sure that none of the options under the *Initialize this repository with:* subheading are checked**, and click the green **Create repository** button to proceed. You will then be redirected to the newly created - and empty - repository's dedicated page, which will feature various instructions on how to populate it with files. Keep this page open as you will need it soon.

In Visual Studio Code, open the folder which contains all the files for the Tool. For this example, this is the `mocksocialmediawebsite` folder, **NOT** the `Code` folder. **It is critical that you are in this folder and not the Code folder which contains the mocksocialmediawebsite folder**. You can be sure of this if the first level of subfolders in the folder you are in include the backend and frontend folders (i.e., you should not see the `mocksocialmediawebsite` as a subfolder on the file browsing panel on the left). **Open a new Git Bash terminal using the arrow next to the plus button** in the Terminal panel. In this terminal, you will need to enter a series of commands that prepare and send the modified code from your device to the newly created GitHub repository.

Enter the following commands in sequence, ensuring that the previous command has completed (you will know this because you will be returned to the $ command line to enter a new command) before you move on to the next and pressing <kbd>Enter</kbd> to execute each one:
* `git init`
  * This command initializes the folder into a git repository format. Because the Mock Social Media Website Code already comes from a git repository, this will re-initialize it. Technically, this command is redundant, but is good to do to be safe.
* `git add .`
  * This command adds all the files, folders, and files within any folders into a tentative list of files to be transferred. The "." signifies that you want to add everything.
* `git status`
  * This command will summarize the files you have modified since downloading the code that are set to be updated when you transfer the code. Likely, this will just list the four files we modified: the config-production.json, the server.js, the nginx.conf, and the http-common.js files.
* `git commit -m "initial commit"`
  * This command packages these changes as an update to the codebase, called a commit. The `-m` indicates that we want to include a message describing the contents of the commit, which is placed within the following quotation marks. Your message does not have to be `initial commit` as it is in the example above, and can be anything you would like. After hitting <kbd>Enter</kbd>, the terminal will show you a summary of how many files, lines inserted within those files, and lines deleted within those files will have changed from the original codebase.
* The next command will be a personalized command that changes the destination for the code you are transferring from its origin (the GitHub repository for the base Mock Social Media Website Tool's code) to your newly created repository, and requires specific information from that new repository's page on GitHub. Back on the new repository's page on Github, make sure that under the *Quick setup - if you've done this kind of thing before* heading, you have clicked the **HTTPS** toggle (i.e., not SSH), and **copy the address next to the toggle buttons** (for this example, the address looked something like `https://github.com/arvinsroom/mocksocialtutorial.git`). Back in visual studio code, you will need to enter `git remote set-url origin` followed by the address you just copied. Altogether, the command should look something like `git remote set-url origin https://github.com/arvinsroom/mocksocialtutorial.git`.
* `git push -u origin main`
  * This command copies all of the code you have locally on your device to the new origin you just set, which is the newly created repository on GitHub; specifically the "main" branch of code within this new repository.

Once you have pushed the code, if you refresh your repository page, you should see all of your local files uploaded to the GitHub repository, ready to be cloned onto the EC2 instance.

## Cloning the GitHub repository to the EC2 instance

In order to clone the contents of the repository to your EC2 instance, you will need to reconnect to your EC2 instance in case it is no longer open.

As a reminder, you can do this by opening the folder containing your .pem file in Visual Studio Code (for this example, `mocksocial.pem`), opening a new Git Bash terminal using the arrow next to the plus button when you have the terminal pane open), and **pasting in the example connection command into your terminal** and hitting <kbd>Enter</kbd>. You can find this example command by navigating to **Instances** under **Instances** in the menu on the left on the EC2 Dashboard, clicking on your instance's Instance ID, clicking the **Connect** button in the upper-right of the *Instance summary* panel, and then selecting the **SSH client** tab in the *Connect to instance* panel. At the bottom of this tab, under the *Example* subheading, you should have the a command that looks something like `ssh -i "mocksocial.pem" ec2-user@ec2-3-99-100-182.ca-central-1.compute.amazonaws.com`. You can **click the copy button** next to this command to easily copy it.

While logged into the EC2 instance, **it is critical that you are in the home directory**, which you can verify by whether the prefix to your command line has a ~ in the place of the location you are in. If you are deep in some subfolders or don't know where you are, you can enter the `cd` command to reset yourself to the home directory.

Back on the repository's page on GitHub, you will need to copy the link to the repository for use in the clone command you will need to enter into the EC2 command like. You can find this link by clicking the green **Code** button above the file listing, click on the **HTTPS** tab under the *Clone* heading, and **use the copy button to copy the link to the repository** ( for this example, the link looks something like `https://giuthub.com/arvinsroom/mocksocialtutorial.git`)

Next, switch back to the EC2 instance's command line that you have open in Visual Studio Code and enter `git clone` followed by the link that you just copied from the repository. For this example, the clone command looks something like `git clone https://giuthub.com/arvinsroom/mocksocialtutorial.git`. The git clone command will make a duplicate of the contents of the repository within the EC2 instance; effectively uploading your modified code to the EC2 instance.

Once you hit <kbd>Enter</kbd> after the git clone command, you will be asked for your GitHub username and password. As with entering the MySQL commands before, you will not be able to see what you are entering as you are entering it. **Importantly, because you are accessing the repository from a server's (i.e., the EC2 instance) command line, you will have to use a personal access token instead of your account password**.

To create a token, you will need to return to GitHub in your browser, **click your profile picture in the navigation bar** and select **Settings** from the dropdown menu. From there, click **Developer settings** in the menu on the left, and then **Personal access tokens** in the subsequent page's menu on the left. At the top of this page, click the **Generate new token** button. The website might ask you to re-input your GitHub account password as an additional layer of security at this point. Once on the *New personal access token* page, provide a note (sort of like a name) for this token (for this example, `mocksocialtutorial` was used), and check off **repo** under the *Select scopes** subheading. You can leave everything else as default and click the green **Generate token** button at the bottom.

You should then be returned to the *Personal access tokens* page, where your newly-created personal access token should be highlighted in green. **This will be the only time you will be able to see this personal access token so make sure not to navigate away from the page before copying it**. **Click the button to the right of the personal access token to copy it** and return to your open terminal in Visual Studio Code. **Paste your newly generated personal access token where it asks you for your password** and hit <kbd>Enter</kbd>. Once your files have been successfully cloned into the EC2 repository, you should see several `, done.` messages, no errors, and be able to input new commands into the EC2 instance. You are now ready for the final step - building and deploying the Tool online.

If you require troubleshooting related to cloning a repository to an EC2 instance, you can find additional information [here](https://medium.com/coder-life/practice-2-host-your-website-on-github-pages-39229dc9bb1b) that may be of help.

## Building the Tool and related troubleshooting

The last step for setting up the Tool is using Docker Compose to build and turn on the Tool on your EC2 instance. The way that the Tool is structured is that the code that you have been working with thus far constitutes instructions for how to build and configure the resulting Tool that is deployed, which is optimal for hiding sensitive security elements from plain view of browsers, such as the specific researcher usernames and passwords that you have specified. There are essentially two components of the Tool: the backend which handles all the functions, and the frontend which handles the user interface that is presented to anyone visiting the website that the Tool is deployed to. Each of these runs in it's own Docker "container," or self-sufficient environment on the server, but the two frequently need to talk to one another to comprise the Mock Social Media Website Tool. What Docker Compose does is stitch the Tool together by creating the necessary relationships between the backend and frontend on the EC2 storage to get it running.

Before you can do this, you need to navigate to the directory on your EC2 instance that the GitHub repository was cloned to. From the home directory (i.e., ~; you can quickly navigate here by entering the command `cd`), you can navigate here by inputting `cd` followed by the name of your github repository and then a forward slash. For this example, the GitHub repository was named `mocksocialtutorial`, so the command that was entered was `cd mocksocialtutorial/` followed by <kbd>Enter</kbd>. You can verify that you are in the correct folder by inputting the `ls` command, which gives you a list of the folders' contents; folders appearing in blue text and filenames appearing in white text. If you input the `ls` command and see the `backend` and `frontend` folders listed in blue, you are in the correct directory.

Now that you are in the correct directory, you can run the final necessary command to stitch the Tool together and deploy it, which is `docker-compose up -d --no-deps --build`. This step can take upwards of 20 minutes to complete, but when it is successful, you should see two lines in the output that read something like:

```
⠿ Container mocksocialtutorial-backend-1  Running
⠿ Container mocksocialtutorial-frontend-1 Started
```

If this is the case, and both lines appear in blue with no subsequent error, **congratulations, you have successfully deployed the Mock Social Media Website Tool on your domain!** You can proceed to the next section to verify that this is the case.

### Troubleshooting in case port 443 is in use

However, there is a possibility that only the backend line appears in blue, whereas the frontend line appears in white nad is followed by an error stating `Error response from daemon: driver failed programming external connectivity on endpoint mocksocialtutorial-frontend-1 ... Error starting userland proxy: listen tcp4 0:0:0:0:443: bind: address already in use`. This error is indicating that Port 443, which the frontend is trying to use to display the user interface to the Internet, is being used by another service. You can think of ports as sorts of network laneways in and out of a given device, where only a single connection can be moving through at any given time.

There are two different potential solutions for this error. The first is to restart Docker and try to run the `docker-compose up -d --no-deps --build` command again. You can restart docker by inputting `sudo service docker restart` and hitting <kbd>Enter</kbd>. If this does not work, you can additionally try manually killing what docker containers are running (presumably only the backend container since that is the only one that succesfully started running). To see a table containing what docker containers are running, you can use the command `docker ps`. In the first column of this table, you can find the *CONTAINER IDs* of the containers that are running. You can kill that container in its own command by inputting `docker kill` followed by the Container ID of the container you want to kill. For this example, to kill a container with a Container ID of `b3a63876ccee`, I input a command of `docker kill b3a63876ccee` and hit <kbd>Enter</kbd>. You can verify that the container has been killed by inputting the `docker ps` command again, and looking to see that the output table shows nothing but the names of the columns (i.e., no containers to list). Afterwards, you can try running the `docker-compose up -d --no-deps --build` command once more to see if both containers end up successfully running.

If the first solution does not work, the second is to look to see if Apache Web Server, which we installed alongside certbot, is using up port 443. To check what is using up port 443, you can input the `sudo netstat -ntulp | grep 443` command and hit <kbd>Enter</kbd>. If the console output has `httpd` somewhere in it - likely at the end - it means that Apache Web Server is hogging up the port. To stop Apache and free up port 443 for use by the frontend, you can input `sudo /usr/sbin/apachectl stop` and hit <kbd>Enter</kbd>. To verify that Apache is no longer hogging up the port, you can re-run the `sudo netstat -ntulp | grep 443` and look for if nothing is output - signalling that the port is now free for use by the frontend. With Apache stopped, you can now attempt to re-run the `docker-compose up -d --no-deps --build` command to build the Tool, and it should successfully run both the backend and frontend.

For additional troubleshooting with Docker commands on EC2 instances, you can visit Amazon's support resource for Docker [here](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html)

## Verifying that the Tool has deployed correctly

There is no better way of verifying whether the Tool is up and running than by trying to log in using your admin/researcher credentials. Remember, these usernames and passwords can be found in your config-production.json file in case you forgot them.

You can access the researcher portal by adding `/admin` to the end of your domain. For this example, the URL is `https://quadtalk.app/admin`, and the usernames and passwords of `researcher1` and `password1` were used respectively. If you click the blue **SIGN IN** button and the admin portal loads (defaulting to the Condition Settings page), it means that your database is working correctly and you can start building and deploying your own studies online, **congratulations!**
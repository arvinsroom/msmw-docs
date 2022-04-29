---
id: renewing-ssl
title: Renewing SSL Certificates
sidebar_position: 3
---

Unfortunately, due to a current technical issue with the website, SSL certificates for online deployments of the Mock Social Media Website Tool need to be manually renewed every 90 days. If they are not renewed, browsers will not be able to access an `https://` version of your website, which are more secure than `http://` versions. Many browsers will even warn users against visiting `http://` versions of websites, which will can cause unwanted technical issues or barriers to participation in recruiting. Thankfully, renewing the SSL certificate for your website is painless and takes a few minutes.

You can find a video tutorial going through the whole process and providing additional context here, however the commands are so simple and few that the written guide below may be faster:

<iframe width="100%" height="315" src="https://www.youtube.com/embed/Hf2mV51Mufs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Background

To renew the SSL certificate, you will largely be doing the last few steps when troubleshooting use of port 443 in [the deploying online tutorial](https://docs.studysocial.media/docs/deploying-online/setting-up-aws#troubleshooting-in-case-port-443-is-in-use) in reverse to give Certbot, the software used to renew SSL certificates, an opportunity to connect to the renewal server. As a quick recap, the frontend of the Tool and Apache, the service Certbot uses to renew SSL certificates, both need to use port 443 of the EC2 instance to interface with the Internet. The frontend of the Tool uses it to display the website to anyone who visits and Apache uses it to authenticate the SSL certificate with Let's Encrypt - a free provider of SSL certificates.

Thus, the website cannot simultaneously be accessible for people to visit and be running the SSL autorenewal process, and thus we need to manually renew it before it expires every 90 days. To renew the SSL certificate, we will temporarily shut down the frontend, start Apache, run Certbot, shut down Apache, and then start the frontend back up by rebuilding the Tool.

## The Steps

Luckily, renewing the SSL certificate is very simple and only requires inputting a few commands while connected to your EC2 instance. If you forgot, you can follow the steps [here](https://docs.studysocial.media/docs/deploying-online/setting-up-aws/#connecting-to-the-ec2-instance) to connect to your EC2 instance.

In the main directory (where there is an `~` for the directory name in the square brackets), input the `docker ps` command and hit <kbd>Enter</kbd> to view the Container IDs of the frontend and backend. In the first column of the table that gets output into your terminal, look at the *NAMES* column to identify the frontend container, and copy its Container ID in the first column.

Next, to kill that container, input `docker kill` followed by the frontend's Container ID. For this example, if the frontend had a Container ID of `b3a63876ccee`, you would input a command like `docker kill b3a63876ccee` and hit <kbd>Enter</kbd>. You can verify that the container has been killed by inputting the `docker ps` command again, and looking to see that the output table shows only the backend container. At this point, both `https://` and `http://` versions of your website will become inaccessible because there is no frontend interface being rendered to anyone who visits it.

To start the Apache service so that we can use Certbot, input the `sudo /usr/sbin/apachectl start` command next and hit <kbd>Enter</kbd>. The Apache service should now be running.

With Apache started, running Certbot is as simple as entering entering `sudo certbot`, hitting <kbd>Enter</kbd>, and then following the instructions in your terminal to run the SSL certificate authentication process, much like you did when you first set up the Tool online. However, because you have previously completed this process, it is abbreviated, and you will likely only have to indicate which domain names you would like to activate HTTPS for. It is recommended that you enable it for all your domains, so just press <kbd>Enter</kbd> when prompted to select all options. If done successfully, your terminal should output a message saying `Your existing certificate has been successfully renewed, and the new certificate has been installed.` If you encounter any issues, please consult the full set of Amazon's instructions on adding SSL certificates to EC2 instances [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html#letsencrypt)

With the certificate renewed, you will now need to turn Apache off to free up the port again for the frontend of your Tool. You can do this by inputting `sudo /usr/sbin/apachectl stop` into your terminal and hitting <kbd>Enter</kbd>.

With Apache stopped, the last step is to re-run the `docker-compose up -d --no-deps --build` command to build the Tool, which will - in the process - turn the frontend back on alongside the backend. The end result should be the same deployment of the Tool that you had before - now with an SSL certificate and a more secure, `https://` version of the website!
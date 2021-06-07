---
sidebar_position: 1
---

# Overview

The Mock Social Media Website Tool is web-based, meaning that in order to create and customize studies, as well as for people to participate with those studies, they need to be accessed via a web browser. However, this does not necessarily mean that the website needs to be deployed to the *Internet*. The tool works the exact same whether you choose to deploy locally or online.

## Deploying locally

It is possible to set up the tool on a locally, such that the tool is running off of and accessed via a desktop or laptop computer with no Internet connection required. This works by setting up a local server and database on your machine (to store the data) and accessing that server through a local address in your web browser.

This option only takes a few steps, and can be done in under 2 hours by someone who hasn't ever touched code before (we tried it!). Once set up, you can run as many studies as you like, indefinitely, using your local set up.

## Deploying online

In many cases, however, you will want to recruit online or send participants a link that they can complete at the time and place of their convenience (much like how people use their personal social media!). In this case, you will need to get a domain name (i.e., a web address) for the version of the tool you deploy and hook up the tool to storage (to host the files that comprise the tool) and database (to collect and retrieve your data) somewhere online.

Naturally, this is more complicated, takes a few more steps than deploying locally, and could potentially add additional research costs. Knowing this, we have taken various steps to minimize all of these things, including centralizing the pieces of code you do have to manually configure.

Another step we took is to build the tool to utilize of Amazon Web Services' (AWS) suite of storage and database services. By doing so, researchers don't have to think a lot about consistency, data security, and reliability because they can just relegate that to one of the leading cloud service providers. The other advantage of using AWS is that their free tier of services are sufficient for running studies with hundreds of participants for the first year. After the first year, you will have to pay based on your actual usage, which may be preferable because you have the flexibility of turning services on when you are running studies off when you aren't (vs. purchasing and constantly paying for dedicated storage). We will update this documentation at a later date with accurate estimates of what a study with a certain number of participants may cost.

We selected AWS because of the ease of use for newcomers, but the tool can feasibly connect to other cloud-based services (e.g., Microsoft Azure, Google Cloud) or in-house servers with custom modifications to the code. For simplicity, the guides will focus on AWS.

## How to read this documentation

The first thing you need to decide is whether you will be running your study locally or online. On the next page, you will read about the software requirements for deploying the study locally or online, many of which are shared.

From there, you will read either the sections on deploying locally and deploying online. Once your website is deployed and you are able to login to the admin portal, the section on configuring your study will guide you through how to create and specify your particular study.

## Important considerations

There are several things to consider while reading through this documentation. This documentation:

* Will not provide its own comprehensive tutorials for using the software and coding languages that are referenced throughout it. Many of these already exist elsewhere, and will be linked to where relevant, but we will always try to give all the information you need to get things up and running.
* Will make some recommendations for various software (e.g., Visual Studio Code) and services (e.g., AWS) to use to make the experience easy for people with limited technical experience. In some cases, these software are required because they are required for deploying the tool. In other cases, there are several tools we recommend based on our experience, but can be interchanged with other software that serves the same purpose. We have received no compensation for, nor are affiliated with any of the software we recommend.
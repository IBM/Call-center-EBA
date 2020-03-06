# Integration of Embedded Business AI (EBA) Framework into the IBM Sterling Call Center for Commerce application


The IBM Sterling Call Center for Commerce Solution provides the Customer Service Representatives (CSRs) with access to a multitude of critical order fulfillment system features in a UI designed for a call center environment. These include order entry, item and inventory lookup, processing returns and exchanges, managing alerts and exceptions on orders, customer appeasement, reshipment and modifications of orders as well as price matches.

The IBM Sterling Call Center for Commerce experience can also be enhanced by extending what is already available in the application using extensions. One such extension is the Embedded Business Assistant (or Embedded Business AI). 

The Embedded Business AI (“EBA”) framework is an open, hybrid multi-cloud deployable, omni-channel, enterprise-class, digital AI framework that can be used by developers to enable advanced domain-specific process automations for business users. Unlike other dialog management systems that use rule-based reasoning and predicate logic, with EBA you describe your business domain to the machine in a simple, consistent, complete and straightforward way. IBM makes use of EBA to create an omni-present “digital twin” that supports the human counterparts wherever they may conduct their business.

Integration of EBA into the IBM Sterling Call Center for Commerce application makes it easier and faster for the CSR to obtain relevant information about the customer they are interacting with and about the customer's orders and transactions. This results in quicker query resolutions and provides enriching and improved interactions between the customer and the CSR.

In this code pattern, you will understand how to integrate the Embedded Business Assistant with IBM Sterling Call Center for Commerce.


# Architecture Diagram

<p align="center">
  <img alt="Architecture diagram" src="https://user-images.githubusercontent.com/8854447/76106188-5eebac00-5fa4-11ea-9856-ff15f05d3ad1.png">
</p>


# Flow

1. The user logs into the Embedded Business AI (EBA) Framework using their IBMId and generates public and private keys that can be used for programmatic access.
2. Using the generated private key and the GetAccessKey.js script available in the Github repo, the user then generates an access key and updates the key in the customer_overrides.properties file available in the Github repo.
3. Next, the user moves the updated customer_overrides.properties file as well as the extensions folder from the Github repo to the server where IBM Sterling Call Center for Commerce is deployed.
4. A new EAR is built and deployed to the IBM Websphere Application Server.
5. The IBM Websphere Application Server is restarted in order to reflect the changes as per the deployed EAR.
6. The user can now verify that the Embedded Business Assistant is integrated into the IBM Sterling Call Center for Commerce application.


# Included components

* [Embedded Business AI Framework](https://www.eba.ai): The Embedded Business AI (“EBA”) framework is an open, hybrid multi-cloud deployable, omni-channel, enterprise-class, digital AI framework used by developers to enable advanced domain-specific process automation (RPA) use cases for business users. 

* [IBM Sterling Order Management](https://www.ibm.com/products/order-management): IBM Sterling Order Management software lets you orchestrate your entire fulfillment network with powerful core capabilities and next-level options. Combine multichannel order aggregation, inventory and delivery visibility, and service availability within a single platform, for truly omnichannel order fulfillment.

* [IBM Sterling Call Center for Commerce](https://www.ibm.com/products/order-management/add-ons#section-heading-4): IBM Sterling Call Center for Commerce is a web-based solution that provides customer service representatives (CSRs) with single access to all commerce information needed to ensure a seamless omni-channel experience for prospects, customers, and partners in a call center environment. 

* [IBM WebSphere Application Server](https://www.ibm.com/cloud/websphere-application-server): IBM WebSphere Application Server is a flexible, security-rich Java server runtime environment for enterprise applications. It delivers advanced performance, redundancy and programming models.


# Featured technologies

* [Node.js](https://nodejs.org/) is an open source, cross-platform JavaScript run-time environment that executes server-side JavaScript code.


# Prerequisites

* [IBM Sterling Order Management](https://www.ibm.com/products/order-management): Installation instructions can be found within the [IBM Sterling Order Management Documentation](https://www.ibm.com/support/knowledgecenter/en/SS6PEW_10.0.0/omV10_welcome.html) on the IBM Knowledge Center.

* [IBM Sterling Call Center for Commerce](https://www.ibm.com/products/order-management/add-ons#section-heading-4): Installation instructions can be found within the [IBM Call Center for Commerce Documentation](https://www.ibm.com/support/knowledgecenter/SSYLSL_10.0.0/ccc_maps/cccV10_welcome.html) on the IBM Knowledge Center.

* [IBM WebSphere Application Server](https://www.ibm.com/cloud/websphere-application-server): WAS is a system requirement for the IBM Sterling Order Management Software and the relevant version of WAS will be provided as part of the IBM Sterling Order Management Software purchase. Installation instructions can be found within the [Websphere Application Server Documentation](https://www.ibm.com/support/knowledgecenter/SSEQTP/mapfiles/product_welcome_was.html) on the IBM Knowledge Center.


# Steps

Follow these steps to setup and run this code pattern:

1. [Clone the Github repository](#1-clone-the-github-repository)
2. [Generate access key](#2-generate-access-key)
3. [Copy properties file and extensions folder from Github repository to Sterling server](#3-copy-properties-file-and-extensions-folder-from-github-repository-to-sterling-server)
4. [Build the EAR file and deploy the application to WebSphere](#4-build-the-ear-file-and-deploy-the-application-to-websphere)
5. [Restart WAS server](#5-restart-was-server)
6. [Start the deployed application on WAS](#6-start-the-deployed-application-on-was)
7. [Verify the changes on IBM Sterling Call Center for Commerce](#7-verify-the-changes-on-ibm-sterling-call-center-for-commerce)


## 1. Clone the Github repository

Use the following commands to obtain a copy of the Github repository on your local machine.

```bash
git clone https://github.com/IBM/Call-center-EBA/
cd Call-center-EBA
```


## 2. Generate access key

**Note: This code pattern works best when you use the Google Chrome/Opera browsers.**

We need to generate an access key in the Embedded Business Assistant using which we can connect EBA with IBM Sterling Call Center for Commerce.

Go to [eba.ibm.com](https://eba.ibm.com) and log in using your IBMId.

<p align="center">
  <img alt="Log into EBA" src="https://user-images.githubusercontent.com/8854447/75168831-89607e00-56f5-11ea-9a01-b0731a304df5.png">
</p>

Once you have successfully logged in, click on the icon on the right hand side that resembles a DNA strand. This will take you to the `Development lab`.

<p align="center">
  <img alt="Go to development lab" src="https://user-images.githubusercontent.com/8854447/75168723-5e762a00-56f5-11ea-963e-6fd0d9a18f56.png">
</p>

Go to the `Settings` tab and select `Enable programmatic access`. This will display all the instructions needed to generate an RSA private and public key pair.

Generate the RSA keypair by running the provided script in the terminal of your local machine.

<p align="center">
  <img alt="View steps for access key" src="https://user-images.githubusercontent.com/8854447/75169793-28d24080-56f7-11ea-9a32-03f80bd87921.png">
</p>

Once you have run the script, you should see 2 .pem files on your local machine - the `private_key.pem` and the `public_key.pem`.

<p align="center">
  <img alt="Generated keys" src="https://user-images.githubusercontent.com/8854447/75169864-41425b00-56f7-11ea-9dfc-d6d7fc527143.png">
</p>

Copy the contents of the `public_key.pem` file and paste it into the section titled `RSA public key in PEM format` on the EBA framework screen.

<p align="center">
  <img alt="Add public key in EBA" src="https://user-images.githubusercontent.com/8854447/75170092-94b4a900-56f7-11ea-9337-be0702884c9b.png">
</p>

The updates to the settings should be saved automatically and you should see the message `Settings saved successfully.` as in the image above.

The next step is to generate the access_key using the `private_key.pem` file. Edit the [GetAccessKey.js](./access_key/GetAccessKey.js) script and update the following information in the `settings` variable:

    - key: The path to the private_key.pem file that was generated earlier.
    - sub: Your email address/IBM Id used to log into the EBA.
    - name: Your name.
    
```js
{
    const settings = {
      url: 'https://eba.ibm.com/',
      key: '../eba_keys/private_key.pem',
      iss: 'https://idaas.iam.ibm.com',
      sub: '<email-address/IBM-Id>',
      name: 'Sandhya Nayak'
  }
}
```

Save the script with these changes and run it. You will first have to install the npm package for `jsonwebtoken`.

```bash
npm install jsonwebtoken
node GetAccessKey.js
```

An access key similar to the one below should be generated and displayed in the terminal. 

```eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkYWFzLmlhbS5pYm0uY29tIiwic3ViIjoic255a0B1cy5pYm0uY29tIiwibmFtZSI6IlNhbmRoeWEgTmF5YWsiLCJpYXQiOjE1ODI1NjE3OTR9.UqMv5P_KtOQf_C9zrMOaXqx7pWbkMFayXwG2QhNekXTHwaWsoof99C-TWp9iTKL-dgVRKDzsqpO5ziV4OtU3BE1HuYAVwRZMQaiNcMs0xceQDPU7R2LKZR5Mfj-jvcFXoSHX2Qk-wO--Omyaol7RaHK_cFI1p9rKKFiHIR4WX6xDdm3-eb419_jtVliNYGLhlh-W3CFCeleY6ft1niPdGqzbsMcJ6_X0s6SsfL_DDlnEpB_SIx9jYjkHklgS-eRjZwLOnDLCUpjSDTCAg3NMqCfLx4jQ51rvmytrgdLOdnWIBjcFoTUyjPm2H9NAHTDzZ87HdLG0ISFPBDWs1yaQKA```

Copy this access key and paste it into the [customer_overrides.properties](./properties/customer_overrides.properties) file as the `yfs.accessKey` property.


## 3. Copy properties file and extensions folder from Github repository to Sterling server

Now that the [customer_overrides.properties](./properties/customer_overrides.properties) file has been updated, we need to copy it to the Sterling server.

Copy the file to the `<install_location_for_IBM_Sterling_Call_Center_for_Commerce>/properties` folder on the Sterling server.

```bash
scp properties/customer_overrides.properties <install_location_for_IBM_Sterling_Call_Center_for_Commerce>/properties
```

Next, we need to recursively copy the contents of the [extensions](./extensions) folder to the `<install_location_for_IBM_Sterling_Call_Center_for_Commerce>/extensions` folder on the Sterling server.

```bash
scp -r extensions <install_location_for_IBM_Sterling_Call_Center_for_Commerce>
```


## 4. Build the EAR file and deploy the application to WebSphere

After the properties and extensions have been updated, a new EAR (Enterprise Archive) file needs to be created.

On the server, open a terminal, and go to `<install_location_for_IBM_Sterling_Call_Center_for_Commerce>/bin` and run the following command to generate the EAR.

**Note: Replace <EAR_name> with the name that you would like to provide for the EAR file.**

```bash
cd <install_location_for_IBM_Sterling_Call_Center_for_Commerce>/bin

./buildear.sh -Dappserver=websphere -Dwarfiles=smcfs,isccsdev,isccs -Dearfile=<EAR_name>.ear -Dnowebservice=true -Dnoejb=true -Ddevmode=true -Dnodocear=true -Duidevmode=true create-ear
```

Once the process completes, the EAR will be generated and stored in the `<install_location_for_IBM_Sterling_Call_Center_for_Commerce>/external_deployments` location.

Now, we need to deploy this generated EAR to the Websphere Application Server.

Open a browser and go to the Websphere Console.

<p align="center">
  <img alt="Open Websphere console" src="https://user-images.githubusercontent.com/8854447/75702264-276ac000-5c83-11ea-91ef-af4a545a5585.png">
</p>

After logging in, expand `Applications` > `Application types` and click on `Websphere enterprise applications`. Once the enterprise applications page is loaded, click on `Install`.

<p align="center">
  <img alt="Install application on WAS" src="https://user-images.githubusercontent.com/8854447/75702723-ffc82780-5c83-11ea-9ee9-f2ac3fcac358.png">
</p>

Select the radio button for `Remote file system` and browse to the `<install_location_for_IBM_Sterling_Call_Center_for_Commerce>/external_deployments` location. Select the EAR that was just built and click `OK`. Click `Next`.

<p align="center">
  <img alt="Select EAR" src="https://user-images.githubusercontent.com/8854447/75703239-115dff00-5c85-11ea-9263-19a12416c9c7.gif">
</p>

Select the radio button for `Fast Path - Prompt only when additional information is required.` and click `Next`.

<p align="center">
  <img alt="Select Fast path" src="https://user-images.githubusercontent.com/8854447/75703371-58e48b00-5c85-11ea-9922-2bc1e4a41955.png">
</p>

Provide a relevant application name and click `Next`.

<p align="center">
  <img alt="Application name" src="https://user-images.githubusercontent.com/8854447/75703520-a2cd7100-5c85-11ea-80cb-76bd8164b4f3.png">
</p>

On the next screen, select all the modules displayed and click `Next`.

<p align="center">
  <img alt="Select modules" src="https://user-images.githubusercontent.com/8854447/75703683-e922d000-5c85-11ea-95d0-b6adf213e622.png">
</p>

Click `Finish`.

<p align="center">
  <img alt="Click finish" src="https://user-images.githubusercontent.com/8854447/75703746-12dbf700-5c86-11ea-8bec-a57f95fd6915.png">
</p>

It will take about 3 minutes for the screen to be refreshed, after which you should see the screen shown below. Click on `Save`.

<p align="center">
  <img alt="Click Save" src="https://user-images.githubusercontent.com/8854447/75704324-29368280-5c87-11ea-9581-4254cb0de6f7.png">
</p>

Like before, this will take a couple minutes and when the screen is finally refreshed, you should be back on the `Enterprise applications` page and should be able to see the application that you just deployed in the list of available applications.

<p align="center">
  <img alt="Application is deployed" src="https://user-images.githubusercontent.com/8854447/75704539-8af6ec80-5c87-11ea-8de0-8cae5e82e214.png">
</p>


## 5. Restart WAS server

Now that the files have been copied, the EAR generated and deployed to the Websphere server, we need to restart the server in order to see the changes reflected.

Using the following commands on the Sterling server go to the `bin/` folder for your `WebsphereApplicationServer` profile, then stop the server using the `stopServer.sh` script and finally, start the server using the `startServer.sh` script.

```bash
cd <install_location_for_IBM_WebSphere>/AppServer/profiles/AppSrv01/bin/
./stopServer.sh <SERVER NAME>
./startServer.sh <SERVER NAME>
```


## 6. Start the deployed application on WAS

In most cases, there will only be one application deployed to the WebSphere server - that is the one that you just deployed.
However, it is possible that you have more than one deployed application on the WebSphere server. Follow the instructions in this step in case you have more than one deployed application on your WebSphere server.

If you do not have any other deployed applications, or if you have deployed applications but none of them are running (an application is running/started if there is a green arrow under the `Application Status` for that application), then you should be able to see that the application you deployed is already running.

<p align="center">
  <img alt="Application is already running" src="https://user-images.githubusercontent.com/8854447/75705577-a3680680-5c89-11ea-845d-aa615f5d768f.png">
</p>

However, if the application you deployed is not already running, you will have to start the application in order to see the changes reflected.

**Note: Only one application can be running at a time, so if you see a different application that is already in the running state, you will have to select that application and click on `Stop` in order to stop it, before you start your application.**

Once you have ensured that no other application is running, select your deployed application and click on `Start`. Once your application starts, you should see a green arrow next to your application and a message that says the application was started successfully.

<p align="center">
  <img alt="Application is started" src="https://user-images.githubusercontent.com/8854447/75705497-7b78a300-5c89-11ea-98c4-03de3775353f.png">
</p>


## 7. Verify the changes on IBM Sterling Call Center for Commerce

Now that all the changes have been made and the WAS server has been successfully restarted, you can log into the IBM Sterling Call Center for Commerce application, and you should be able to verify that the Embedded Business Assistant extension that we had added can be seen on the screen. 

This is how the application looked before the extension was applied.

<p align="center">
  <img alt="Call center before applying extensions" src="https://user-images.githubusercontent.com/8854447/75721729-da004a00-5ca6-11ea-9bb2-8c5f161a6458.png">
</p>

And this is how the IBM Sterling Call Center for Commerce application looks now, once the EBA extension has been applied. You can see the extension on the lower right hand corner of the screen.

<p align="center">
  <img alt="Call center after applying extensions" src="https://user-images.githubusercontent.com/8854447/75706067-9697e280-5c8a-11ea-8cb7-a85eae0e316d.png">
</p>

Since you have provided the access key which was generated using your login information in Embedded Business Assistant, the EBA extension on the IBM Sterliing Call Center for Commerce application should be able to pull up this information and you should be able to see your name on the dashboard as shown below:

<p align="center">
  <img alt="EBA is already logged in" src="https://user-images.githubusercontent.com/8854447/75778280-7f5a0300-5d25-11ea-8fc8-3f5d182f1177.png">
</p>


# Learn more

* **Learn about the Intelligent Customer Care Call Center**: Find out how [IBM Sterling enables intelligent orchestration of customer transactions across back-end record systems](https://developer.ibm.com/blogs/intelligent-customer-care-call-center/).
* **Build machine learning models for Intelligent Customer Care Call Center**: Learn how to [build a machine learning model for calculating product order return propensity](https://developer.ibm.com/patterns/use-icp4d-to-build-the-machine-learning-model-for-return-propensity/) using IBM Cloud Pak for Data and the Watson Machine Learning Add-On.
* **IBM Sterling Order Management**: Interested in learning more about IBM Sterling Order Management? Check out this series on how to manage [Growing Order Data](https://developer.ibm.com/components/sterling/series/growing-order-data-is-it-really-an-issue-blog-series).
* **Learn about IBM Sterling**: Enjoyed this Code Pattern? Check out code patterns, blogs, articles and series on IBM Sterling products at [IBM Sterling on IBM Developer](https://developer.ibm.com/components/sterling/).


# License

This code pattern is licensed under the Apache Software License, Version 2.  Separate third party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the Developer [Certificate of Origin, Version 1.1 (DCO)](https://developercertificate.org/) and the [Apache Software License, Version 2](http://www.apache.org/licenses/LICENSE-2.0.txt).

Check the [ASL FAQ link](http://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN) for more details.

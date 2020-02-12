Steps in the Call Center EBA Integration

1) Place the extensions folder contents  in the <CallCenter Installation Path>/extensions/

2) To get the access key, Go to eba.ibm.com login with your ID and go to the settings tab

3) Generate the public key and private using the command specifies from the settings page of EBA

4) Run the nodeJS script in the access_token folder by replacing the necessary parameter and the PATH to the generated privatekey

5) copy the obtained access key and go to <OMS Installation folder>/extensions/isccs/webpages/home and open HomeExtn.js and replace the acess token in LoadEBA function and also provide the login user name name

6) Open eba.ibm.com and import the yaml present in the GIT folder and provide the necessary URL for the data  



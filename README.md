Steps in the Call Center EBA Integration

1) Place the extensions folder contents  in the "<CallCenter Installation Path>"/extensions/

2) To get the access key, Go to eba.ibm.com login with your ID and go to the settings tab

3) Generate the public key and private using the command specified in the settings page of EBA

4) Run the nodeJS script in the access_token folder by replacing the necessary parameter and the PATH to the generated privatekey

5) copy the obtained access key and update the custoer_overrides file in properties folder and place it in "<CallCenter Installation Path>"/properties/
  
6) Restart the Application server



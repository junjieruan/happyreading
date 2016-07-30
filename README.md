# 悦读，简洁的图书阅读应用。（Build by Ionic2）
 
##System information  
    Cordova CLI: 6.3.0 
    Ionic Framework Version: 2.0.0-beta.35  
    Ionic CLI Version: 2.0.0-beta.35  
    Node Version: v4.4.4  
     
##Installation
###Building to a Device  

    $npm install -g cordova --registry https://registry.npm.taobao.org
    
###Installing Ionic
 
    $ npm install -g ionic@beta  
    
    
 To create your project  into the local directory:  
 
    $ ionic start happyreading --v2
    
If ionic start make some error,you can install the cnpm in local directory:

    $cnpm install;
    
 To run your app, cd into the directory that was created and then run the ionic serve command:  
 
    $ cd happyreading  
    $ ionic serve  

 
###Building a platform for android  

    $ionic platform add android
   
###Building for Android  

    $ionic build android

###Building a platform for Ios 

    $ionic platform add ios
   
###Building for Ios  

    $ionic build ios

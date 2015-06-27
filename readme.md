# bdotnet-ionic-demo
Hybrid mobile application built using [ionic] (http://ionicframework.com). 
This application features some of the commonly used mobile UI controls and layouts provided by Ionic. 
Please follow the steps below to run this application 

Steps to run this application
-----------------------------
* Install [node.js] (http://nodejs.org)

* Install ionic and cordova using the below commands
	* `$ npm install -g cordova`
	* `$ npm install -g ionic`

* If any SSL related issues arise on above npm install commands, run the below ones & then re-run the above commands, else skip this step
	* `$ npm config set strict-ssl false`
	* `$ npm config set registry http://registry.npmjs.org`

* Navigate to the directory where this codebase is cloned/downloaded
	* `$ ionic serve` -- serves the application from a local node server
	* `$ ionic serve --lab` -- serves the application with a side by side view for android & ios

* To build for android - Building for android requires android SDK & build tools to be pre-installed 

	*  Set the `ANDROID_HOME` environment variable
	* `$ ionic platform add android` 
	* `$ ionic build android` - runs a cordova build for android platform
	* `$ ionic emulate android` - runs the application in android emulator, this requires Android AVDs be pre-configured 
	* `$ ionic run android` - runs the application on the device connected via USB

* To build for ios - Building for ios requires a MAC machine
	* `$ ionic platform add ios` 
	* `$ ionic build ios` - runs a cordova build for ios
	* `$ npm install -g ios-sim` - installs the ios simulator (used by ionic emulate command)
	* `$ ionic emulate iOS` - runs the application in ios simulator

* To add any plugins for device interaction
	* `$ cordova plugin add <plugin-name>/<plugin-url>` - plugin-url can be a remote url/local machine's folder where the plugin is downloaded 
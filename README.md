# vagalume-timeline
Timeline sample for vagalume project   
Structure based in ishara's **angular2-without-npm** [1] (https://github.com/ishara/angular2-without-npm) to avoid the need of install node.js and npm

## Used libraries

 - Bootstrap 3.3.6
 - jQuery 2.2.3
 - Font awesome 3.2.1
 - System.js 0.19.6
 - Angular.js 2.0.0-rc.5 (with typescript)

## Folder structure and files

 - 1. index.html: The index of the application (the only one, is single page)
 - 2. system.config.js: Application configuration, defines paths and packages     
 - 3. assets: Folder with files related to view (css, js, img)
 - 4. app: Folder with app-specific code (angular components and pages etc)
    - 4.1. models: Typescript classes related to application data models
    - 4.2. services: Typescript classes related to application data providers
    - 4.3. components: Typescript classes related to application view components
    - 4.4. templates: Html templates to use in application

## Running application

To run, is just needed a server landing in the project folder (same level as index.html) and open the 'server url/index.html' file    
Tested with **Apache hpptd (Apache2)** [2] (https://httpd.apache.org/), **Cloud9** [3] (https://c9.io/), and **Webserver for Chrome** [4] (https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)     
To configure it, open **system.config.js** file and set your custom *timelineUrl*, *localTimelineUrl* and *alternateVersion*     
> *timelineUrl*: external path to timeline.json      
> *localTimelineUrl*: internal (local) path to timeline.json      
> *alternateVersion*: set to **true** to get an alternative view of timeline (zig-zag) or **false (default)** to get a list view      

## References

[1] https://github.com/ishara/angular2-without-npm            
[2] https://httpd.apache.org/      
[3] https://c9.io/      
[4] https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb      

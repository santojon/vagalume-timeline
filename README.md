# vagalume-timeline
Timeline sample for vagalume project   
Structure based in ishara's angular2-without-npm [1] to avoid the need of install node.js

## Used libraries

 - Bootstrap 3.3.6
 - jQuery 2.2.3
 - Font awesome 3.2.1
 - System.js 0.19.6
 - Angular.js 2.0.0-rc.5 (with typescript)

## Folder structure and files

 - 1. index.html: The index of the application (the only one, is single page)
 - 2. system.config.js: Application configuration, defines paths and packages (based in [1]) 
 - 3. assets: Folder with files related to view (css, js, img)
 - 4. app: Folder with app-specific code (angular components and pages etc)
    - 4.1. models: Typescript classes related to application data models
    - 4.2. services: Typescript classes related to application data providers
    - 4.3. components: Typescript classes related to application view components
    - 4.4. templates: Html templates to use in application

## References

[1] https://github.com/ishara/angular2-without-npm
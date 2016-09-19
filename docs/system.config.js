/**
 * System configuration
 * 
 * Used to configure:
 *      - system-wide preferences
 *      - libraries and dependencies versions
 *      - application behaviour
 *      - development and runtime options
 *      - application packages
 */

// Timeline related Urls (server and local json files)
var timelineUrl = 'http://vagalumewifi.com.br/timeline.json';
var localTimelineUrl = '../timeline.json';

// Angular version
var angularVersion = '2.0.0-rc.5';

// Application url configuration
System.config({
    baseUrl: '/',
    paths: {
        'unpkg:*': 'https://unpkg.com/*'
    }
});

// Development and runtime options
System.config({
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true },
    meta: {
        '*': {
            deps: ['zone.js', 'reflect-metadata']
        }
    }
});

// Libraries, dependencies and packages configuration
System.config({
    packageConfigPaths: [
        "unpkg:@*/*/package.json"
    ],
    // Map unpkg libs locations to angular defauts
    map: {
        '@angular/core': 'unpkg:@angular/core@' + angularVersion,
        '@angular/compiler': 'unpkg:@angular/compiler@' + angularVersion,
        '@angular/common': 'unpkg:@angular/common@' + angularVersion,
        '@angular/http': 'unpkg:@angular/http@' + angularVersion,
        '@angular/platform-browser': 'unpkg:@angular/platform-browser@' + angularVersion,
        '@angular/platform-browser-dynamic': 'unpkg:@angular/platform-browser-dynamic@' + angularVersion,
        'rxjs': 'unpkg:rxjs@5.0.0-beta.6',
        'zone.js': 'unpkg:zone.js@0.6.12',
        'reflect-metadata': 'unpkg:reflect-metadata@0.1.3',
        "crypto": "@empty"
    },
    // Configure application packages
    packages: {
        'app': {
            defaultExtension: 'ts',
            main: './index.ts'
        }
    }
});
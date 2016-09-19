/**
 * Angular needed imports
 */
import { Component } from '@angular/core';

/**
 * Application specific imports
 */
import { TimelinePost } from '../models/timelinePost';
import { TimelineService } from '../services/timelineService';

/**
 * Component responsible to bind timeline data to screen
 */
@Component({
    selector: 'timeline',
    templateUrl: 'vagalume-timeline/app/templates/timeline.html',
    providers: [ TimelineService ]
})
export class Timeline {
    // the posts
    private posts: TimelinePost[];

    name: string;
    
    // error to be used in case of problems in requests,
    // to show it to the user
    errorMessage: any;

    /**
     * Get timeline from 'timelineUrl', configured in system.config.js
     */
    getTimeline() {
        this.timelineService.getTimeline().subscribe(
            timelinePosts => this.posts = timelinePosts,
            error =>  this.errorMessage = <any>error
        );
    }

    /**
     * Get timeline from 'localTimelineUrl', configured in system.config.js
     * PS: This method can be used to test app if we have
     * problems with requests in timeline server or server don't handle CORS requests
     */
    getLocalTimeline() {
        this.timelineService.getLocalTimeline().subscribe(
            timelinePosts => this.setUpTimeline(timelinePosts),
            error =>  this.errorMessage = <any>error
        );
    }

    setUpTimeline(timelinePosts: TimelinePost[]) {
        this.posts = timelinePosts;

        // hide loader and reveal content
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }

    /**
     * Fill timeline with data
     */
    constructor(private timelineService: TimelineService) {
        this.getLocalTimeline();
    }
}
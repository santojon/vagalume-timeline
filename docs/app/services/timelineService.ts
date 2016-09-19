/**
 * Angular needed imports
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

/**
 * Application specific imports
 */
import { User } from '../models/user';
import { TimelinePost } from '../models/timelinePost';

/**
 * intectable class, used as provider for timeline
 */
@Injectable()
export class TimelineService {
  /**
   * Constructor
   */
  constructor(private http: Http) { }

  /**
     * Get timeline from 'timelineUrl', configured in system.config.js
     */
  getTimeline(): Observable<TimelinePost[]> {
    // add headers
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    // make the request
    return this.http
      .get(timelineUrl, new RequestOptions({ headers: headers }))
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Get timeline from 'localTimelineUrl', configured in system.config.js
   * PS: This method can be used to test app if we have
   * problems with requests in timeline server or server don't handle CORS requests
   */
  getLocalTimeline(): Observable<TimelinePost[]> {
    return this.http
      .get(localTimelineUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Method responsible to manipulate data from resource,
   * to give it to the screen-related components
   */
  private extractData(res: Response) {
    let body = JSON.parse(res._body);
    return body.map((post) => {
        return new TimelinePost(
          post.content,
          post.date,
          post.likes,
          new User(
            post.user.id,
            post.user.username,
            post.user.location,
            post.user.picture,
            post.user.bio,
            post.user.friends
          )
        );
    }) || [];
  }

  /**
   * Used to handle errors and throw it to console
   */
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
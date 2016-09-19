/**
 * Application specific imports
 */
import { User } from './user';

/**
 * Class that represents the model of a post, with all fields
 */
export class TimelinePost {
    // properties
    content: String;
    date: Date;
    likes: Number;
    user: User;

    /**
     * Constructor
     */
    constructor(content: String, date: String, likes: Number, user: User) {
        this.content = content;
        this.date = date.iso8601ToDate();
        this.likes = likes;
        this.user = user;
    }
}
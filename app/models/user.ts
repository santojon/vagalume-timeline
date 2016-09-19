/**
 * Class that represents the model of a post, with all fields
 */
export class User {
    // properties
    id: Number;
    username: String;
    location: String;
    picture: URL;
    bio: String;
    friends: Number;

    /**
     * Constructor
     */
    constructor(id: Number, username: String, location: String,
                    picture: String, bio: String, friends: Number) {
        this.id = id;
        this.username = username;
        this.location = location;
        this.picture = new URL(picture);
        this.bio = bio;
        this.friends = friends;
    }
}
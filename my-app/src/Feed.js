import React from 'react';
import "./Feed.css";

//Capturing the feed for the logged in user
function Feed() {
    return (
        <div className="feed">
            <div className="name__user">
                <input type="text" value="Anonymous"></input>
            </div>
            <div className="display__incident">
                <input text="The incident I'd like to share is right here"></input>

            </div>
            <div className="comments">
                <input text="submit" value="Comments"></input>
            </div>
            
        </div>
    )
}

export default Feed

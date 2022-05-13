import React from 'react';
import Feed from "./Feed";
import "./Post.css";
//Space for the logged in user to make posts
function Post() {
    return (
        <div className="post">
            <div className="create__post">
                <input type="text" value="Create post"></input>
            </div>
            <div className="enter__post">
                <form>
                    <input placeholder= "How are you feeling today?"></input> 
                </form>

            </div>
            <div className="postButton">
                <input type="submit" value="Post"></input>
            </div>
            <Feed />
            
        </div>
    )
}

export default Post

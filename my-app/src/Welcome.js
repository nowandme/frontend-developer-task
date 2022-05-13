import React from 'react';
import "./Welcome.css";
import Post from "./Post";
//Welcome message followed by the feature to make posts
function Welcome() {
    return (
        <div className="welcome">
            
                <h1>Hello Jane</h1>
                <h4>How are you doing today? Would you like to share something with the community</h4>
                <Post />
        </div>
        
    )
}

export default Welcome

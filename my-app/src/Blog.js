import React from 'react';
import Welcome from "./Welcome";

/*Blog is broken into three componenets: 1) Welcome message to the user signed in
2) The ability of the user to post
3) The ability for the user to see the content posted by others */
function blog() {

    return (
        <div className="blog">
            <Welcome />
        </div>
    )
}

export default blog

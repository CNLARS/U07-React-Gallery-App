import React from "react";

// NotFound: displaying a user friendly message 
// when the search returns no results.

const NotFound = (props) => {

 return (
    <div className="not-found">
        <h3>No Results Found</h3>
        <p>No images are available; please try again.</p>
    </div>
        );
}

export default NotFound;
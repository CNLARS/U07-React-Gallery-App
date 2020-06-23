import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

const PhotoContainer = props => {

    const images = props.data; 
    let pictures;

    if(images.length > 0){
        pictures = images.map( (picture) => 
            <Photo 
                url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
                key={picture.id}
                alt={picture.title} />
            );
    } else {
        pictures = <NotFound />
    }

return (
    <div className="photo-container">
            <ul>
              {pictures}
            </ul>
    </div>
        );
}

export default PhotoContainer;
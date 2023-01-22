import React from "react";

export default function Photos(props) {
    if(props.photos) {
        return (
            <div className="Photos">
                <div className="row">
                    {props.photos.map(function(photo, index) {
                        return (
                            <div className="col-3">
                                <a href={photo.src.original}>
                                    <img src={photo.src.landscape} key={index} alt={props.alt} />
                                </a>
                            </div>)
                    })}
                </div>
            </div>
        )
    } else {
        return null;
    }
}
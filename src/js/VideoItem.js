import React from "react";
import PropTypes from 'prop-types';
import {Movie} from "./models/Movie";


VideoItem.propTypes = {
    video: PropTypes.instanceOf(Movie)
};

function VideoItem({video}) {
    return (
        <li className="media">
            <div className="media-left">
                <img className="media-object"
                     alt="cat" src={video.thumbnail}
                     width="246"
                     height="138"/>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{video.title}</h4>
                <p>{video.description}</p>
            </div>
        </li>
    );
}

export default VideoItem
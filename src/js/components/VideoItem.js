import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


VideoItem.propTypes = {
    video: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    })
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
                <Link to={`/videos/${video.id}`}>
                    <h4 className="media-heading">{video.title}</h4>
                </Link>
                <p>{video.description}</p>
            </div>
        </li>
    );
}

export default VideoItem
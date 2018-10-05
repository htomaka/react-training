import React, {Component} from 'react';
import {connect} from 'react-redux';
import VideoItem from "../components/VideoItem";
import {fetchVideos} from "../actions";
import {bindActionCreators} from "redux";

class VideoList extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        return (
            <div className="row marketing">
                <div className="col-lg-12">
                    <ul className="media-list">
                        {
                            this.props.videos.map(video => (<VideoItem key={video.id} video={video}/>))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        videos: state.videos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
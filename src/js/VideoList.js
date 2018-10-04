import React, {Component} from 'react';
import * as movies from './services/movies';
import VideoItem from "./VideoItem";

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    componentDidMount() {
        this.setState({
            videos: movies.fetch()
        })
    }

    render() {
        return (
            <div className="row marketing">
                <div className="col-lg-12">
                    <ul className="media-list">
                        {this.state.videos.map(vid => (<VideoItem key={vid.id} video={vid} />))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default VideoList;
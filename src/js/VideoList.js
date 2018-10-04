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
        movies.fetch()
            .then(movies => {
                this.setState({
                    videos: movies
                })
            })
    }

    render() {
        return (
            <div className="row marketing">
                <div className="col-lg-12">
                    <ul className="media-list">
                        {this.state.videos.map(video => (<VideoItem key={video.id} video={video} />))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default VideoList;
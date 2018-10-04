import React, {Component} from 'react';
import * as movies from './services/movies';

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
                        {this.state.videos.map(renderVid)}
                    </ul>
                </div>
            </div>
        );
    }
}

function renderVid(vid) {
    return (
        <li key={vid.id} className="media">
            <div className="media-left">
                <img className="media-object"
                     alt="cat" src={vid.thumbnail}
                     width="246"
                     height="138"/>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{vid.title}</h4>
                <p>{vid.description}</p>
            </div>
        </li>
    );
}

export default VideoList;
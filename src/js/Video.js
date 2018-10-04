import React, {Component} from 'react';
import * as movies from './services/movies';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: movies.fetch()[0]
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                video: movies.next()
            });
        }, 10000)
    }

    render() {
        const {file, title, description} = this.state.video;
        const style = {
            width: "100%",
            backgroundColor: "black"
        };
        return (
            <div className="row marketing">
                <div className="col-sm-12 col-md-12">
                    <div className="video-detail">
                        <div className="caption">
                            <video
                                style={style}
                                height="300"
                                controls
                                src={file}
                            >
                            </video>
                            <h3>{title}</h3>
                            {description && <p>{description}</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;
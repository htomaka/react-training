import React, {Component} from 'react';
import * as movies from './services/movies';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: movies.fetch()[0]
        };

        this.player = null;

        this.playNext = this.playNext.bind(this);
    }

    componentDidMount() {
        setInterval(this.playNext, 10000);
        this.player.play();
    }

    shouldComponentUpdate(prevProps, prevState) {
        return prevState.video.id !== this.state.video.id;
    }

    playNext() {
        this.setState({
            video: movies.next()
        }, () => {
            this.player.play();
        });
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
                                ref={el => this.player = el}
                                style={style}
                                height="300"
                                controls
                                src={file}
                            >
                            </video>
                            <h3>{title}</h3>
                            {description && <p>{description}</p>}
                            <div>
                                <button className="btn btn-default" onClick={this.playNext}>Play next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;
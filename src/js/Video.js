import React, {Component} from 'react';
import * as movies from './services/movies';
import VideoComments from "./VideoComments";
import VideoCommentsForm from "./VideoCommentsForm";

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: {},
            videoId: 2,
            comments: [],
            isLoading: false
        };

        this.player = null;

        this.saveComment = this.saveComment.bind(this);
        this.getComments = this.getComments.bind(this);
    }

    componentDidMount() {
        this.getVideo();
        this.getComments();
    }

    getVideo() {
        this.setIsLoading();
        return movies.fetchById(this.state.videoId)
            .then(movie => {
                this.setState({
                    video: movie,
                    isLoading: false
                }, () => {
                    this.player.play();
                })
            });
    }

    getComments() {
        this.setIsLoading();
        return movies.fetchComments(this.state.videoId)
            .then(comments => {
                this.setState({
                    comments: comments,
                    isLoading: false
                })
            })
    }

    saveComment({content}) {
        this.setIsLoading();
        return movies.saveComments(this.state.videoId, {
            content: content
        })
            .then(this.getComments);
    }

    setIsLoading() {
        this.setState({
            isLoading: true
        });
    }

    render() {
        const {file, title, description} = this.state.video;
        const style = {
            width: "100%",
            backgroundColor: "black"
        };
        return (
            <div className={getStyles(this.state.isLoading)}>
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
                        </div>
                    </div>
                    { this.state.isLoading && 'Loading...'}
                    <VideoCommentsForm onSubmit={this.saveComment}/>
                    <VideoComments comments={this.state.comments}/>
                </div>
            </div>
        );
    }
}

function getStyles(isLoading) {
    return `row marketing ${isLoading ? 'disabled' : ''}`;
}

export default Video;
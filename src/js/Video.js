import React, {Component} from 'react';
import * as movies from './services/movies';
import VideoComments from "./VideoComments";
import VideoCommentsForm from "./VideoCommentsForm";

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: {},
            comments: []
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
        movies.fetchById('8')
            .then(movie => {
                this.setState({
                    video: movie
                }, () => {
                    this.player.play();
                })
            });
    }

    getComments() {
        movies.fetchComments('8')
            .then(comments => {
                this.setState({
                    comments: comments
                })
            })
    }

    saveComment({content}) {
        return movies.saveComments('8', {
            content: content
        })
            .then(this.getComments);
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
                        </div>
                    </div>
                    <VideoCommentsForm onSubmit={this.saveComment}/>
                    <VideoComments comments={this.state.comments}/>
                </div>
            </div>
        );
    }
}

export default Video;
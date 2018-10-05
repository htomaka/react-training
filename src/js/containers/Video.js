import React, {Component} from 'react';
import VideoComments from "./VideoComments";
import VideoCommentsForm from "./VideoCommentsForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchVideo, fetchVideoComments, saveComments} from "../actions";

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.player = null;

        this.saveComment = this.saveComment.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id);
        this.props.fetchVideoComments(this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        // autoplay video
        if (prevProps.video !== this.props.video) {
            this.player.play();
        }
    }

    saveComment(comment) {
        return this.props.saveComments(this.props.match.params.id, comment)
    }


    render() {
        const style = {
            width: "100%",
            backgroundColor: "black"
        };
        const {file, title, description} = this.props.video || {};
        return (
            this.props.video && (
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
                        <VideoCommentsForm onSubmit={this.saveComment}/>
                        <VideoComments comments={this.props.comments}/>
                    </div>
                </div>
            )
        );
    }
}

function getStyles(isLoading) {
    return `row marketing ${isLoading ? 'disabled' : ''}`;
}

function mapStateToProps(state) {
    return {
        video: state.activeVideo,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchVideo, fetchVideoComments, saveComments}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);
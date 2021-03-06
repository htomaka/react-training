import React, {Component} from 'react';
import * as movies from '../services/movies';
import {bindActionCreators} from "redux";
import {push} from 'connected-react-router';
import {connect} from "react-redux";

class VideoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: '',
                description: '',
                file: null
            },
            isSubmitted: false,
            isLoading: false
        };

        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDescChange(event) {
        this.setState({
            formData: {
                ...this.state.formData,
                description: event.target.value
            }
        });
    }

    handleTitleChange(event) {
        this.setState({
            formData: {
                ...this.state.formData,
                title: event.target.value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            formData: {
                ...this.state.formData,
                file: this.fileInput.files[0]
            },
            isLoading: true
        }, () => {
            movies.save(this.state.formData)
                .then(movie => {
                    this.props.push(`/videos/${movie.id}`)
                });
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.isLoading && <p>Loading...</p>}
                {
                    this.state.isSubmitted ?
                        (<div className="alert alert-success">La vidéo a bien été ajoutée</div>) :
                        (
                            <form onSubmit={this.handleSubmit} className={getStyles(this.state.isLoading)}>
                                <div className="form-group">
                                    <label htmlFor="title">Titre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.formData.title}
                                        onChange={e => this.handleTitleChange(e)}
                                        name="title"
                                        id="title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="desc">Description</label>
                                    <textarea
                                        className="form-control"
                                        value={this.state.formData.description}
                                        onChange={e => this.handleDescChange(e)}
                                        name="desc"
                                        id="desc"
                                        cols="30"
                                        rows="2"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="file">Chargez un vidéo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        ref={el => this.fileInput = el}
                                        name="file"
                                        id="file"
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-default">
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        )

                }
            </div>
        );
    }
}

function getStyles(isLoading) {
    return isLoading ? 'disabled' : '';
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({push}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
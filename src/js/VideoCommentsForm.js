import React, {Component} from 'react';

class VideoCommentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };

        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state)
            .then(() => {
                this.setState({
                    content: ''
                });
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="content">Ajouter un commentaire</label>
                    <textarea
                        className="form-control"
                        value={this.state.content}
                        onChange={this.handleContentChange}
                        name="content"
                        id="content"
                        cols="30"
                        rows="2"
                    />
                </div>
                <button type="submit" className="btn btn-default">
                    Envoyer
                </button>
            </form>
        );
    }
}

export default VideoCommentsForm;
import React from 'react';

export default function VideoComments({comments}) {
    return (
        <div className="comments">
            <h4>Commentaires: </h4>
            <div className="panel panel-default">
                <div className="panel-body">
                    {
                        comments.map(({id, content}) => {
                            return (
                                <h6 key={id}>
                                    <small>{content}</small>
                                </h6>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
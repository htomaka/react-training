import React from 'react';

export default function VideoComments({comments}) {
    return (
        <div className="comments" style={{marginTop: '32px'}}>
            <h4>Commentaires: </h4>
            {
                comments.map(({id, content}) => {
                    return (
                        <div key={id} className="panel panel-default">
                            <div className="panel-body">
                                <h6>
                                    <small>{content}</small>
                                </h6>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
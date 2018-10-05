import request from 'superagent';
import config from 'config';
import {Movie} from "../models/Movie";

function fetch() {
    return request.get(`${config.apiPath}/videos`)
        .then(({body}) => {
            return body.map(makeMovie);
        });
}

function fetchById(id) {
    return request.get(`${config.apiPath}/videos/${id}`)
        .then(({body}) => {
            return makeMovie(body);
        });
}

function fetchComments(id) {
    return request.get(`${config.apiPath}/videos/${id}/comments`)
        .then(({body}) => {
            return body;
        });
}

function makeMovie({id, title, description, file}) {
    return new Movie(id, title, description, file)
}

function save({title, description, file}) {
    return request
        .post(`${config.apiPath}/videos`)
        .attach('file', file)
        .field('title', title)
        .field('description', description)
        .then(({body}) => body);
}

function saveComments(id, {content}) {
    return request
        .post(`${config.apiPath}/videos/${id}/comments`)
        .field('content', content)
        .then(console.log);
}

export {
    fetch,
    fetchById,
    fetchComments,
    save,
    saveComments
};
import request from 'superagent';
import config from 'config';
import {Movie} from "../models/Movie";

let activeVidIndex = 0;

function fetch() {
    return request.get(`${config.apiPath}/movies`)
        .then(({body}) => {
            return body.map(({id, title, description, file}) => new Movie(id, title, description, `uploads/${file}`));
        });
}

function fetchById(id) {
    return request.get(`${config.apiPath}/movies/${id}`)
        .then(({body}) => {
            const {id, title, description, file} = body;
            return new Movie(id, title, description, `uploads/${file}`);
        });
}

function fetchComments(id){
    return request.get(`${config.apiPath}/movies/${id}/comments`)
        .then(({body}) => {
            return body;
        });
}

function save({title, description, file}) {
    return request
        .post(`${config.apiPath}/movies`)
        .attach('file', file)
        .field('title', title)
        .field('description', description)
        .then(console.log);
}

function saveComments(id, {content}) {
    return request
        .post(`${config.apiPath}/movies/${id}/comments`)
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
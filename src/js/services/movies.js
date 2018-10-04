import {Movie} from "../models/Movie";

const URL = 'http://localhost/3.1-react-youtube-bootstrap/site/web';

const movies = [
    new Movie('Movie 1', '', `${URL}/uploads/video1.mp4`, 'http://placeimg.com/246/138/any/sepia'),
    new Movie('Movie 2', 'desc 2', `${URL}/uploads/video2.mp4`, 'http://placeimg.com/246/138/any/architecture'),
    new Movie('Movie 3', 'desc 3', `${URL}/uploads/video3.mp4`, 'http://placeimg.com/246/138/any/animals')
];

let activeVidIndex = 0;

function fetch(){
    return movies;
}

function fetchRandom(){
    const index = Math.floor(Math.random() * Math.floor(movies.length));
    return movies[index];
}

function next(){
    activeVidIndex = (activeVidIndex + 1) % movies.length;
    return movies[activeVidIndex];
}

export {
    fetch,
    fetchRandom,
    next
};
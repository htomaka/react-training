import * as movies from '../services/movies';

export const FETCH_VIDEOS_LOADING = 'FETCH_VIDEOS_LOADING';
export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS';
export const FETCH_VIDEOS_ERROR = 'FETCH_VIDEOS_ERROR';

export const FETCH_VIDEO_LOADING = 'FETCH_VIDEO_LOADING';
export const FETCH_VIDEO_SUCCESS = 'FETCH_VIDEO_SUCCESS';
export const FETCH_VIDEO_ERROR = 'FETCH_VIDEO_ERROR';

export const FETCH_VIDEO_COMMENTS_LOADING = 'FETCH_VIDEO_COMMENTS_LOADING';
export const FETCH_VIDEO_COMMENTS_SUCCESS = 'FETCH_VIDEO_COMMENTS_SUCCESS';
export const FETCH_VIDEO_COMMENTS_ERROR = 'FETCH_VIDEO_COMMENTS_ERROR';

export const SAVE_COMMENT_LOADING = 'SAVE_COMMENT_LOADING';
export const SAVE_COMMENT_SUCCESS = 'SAVE_COMMENT_SUCCESS';
export const SAVE_COMMENT_ERROR = 'SAVE_COMMENT_ERROR';

function fetchVideos() {
    return function (dispatch, getState) {
        dispatch({
            type: FETCH_VIDEOS_LOADING
        });
        return movies.fetch()
            .then(movies => {
                dispatch({
                    type: FETCH_VIDEOS_SUCCESS,
                    videos: movies
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_VIDEOS_ERROR,
                    error: err
                })
            })
    };
}

function fetchVideo(id) {
    return function (dispatch, getState) {
        dispatch({
            type: FETCH_VIDEO_LOADING
        });
        return movies.fetchById(id)
            .then(movies => {
                dispatch({
                    type: FETCH_VIDEO_SUCCESS,
                    video: movies
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_VIDEO_ERROR,
                    error: err
                })
            })
    };
}

function fetchVideoComments(videoId) {
    return function (dispatch, getState) {
        dispatch({
            type: FETCH_VIDEO_COMMENTS_LOADING
        });
        return movies.fetchComments(videoId)
            .then(comments => {
                dispatch({
                    type: FETCH_VIDEO_COMMENTS_SUCCESS,
                    comments: comments
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_VIDEO_COMMENTS_ERROR,
                    error: err
                })
            })
    };
}

function saveComments(videoId, comment) {
    return function (dispatch, getState) {
        dispatch({
            type: SAVE_COMMENT_LOADING
        });
        return movies.saveComments(videoId, comment)
            .then(() => {
                dispatch({
                    type: SAVE_COMMENT_SUCCESS,
                });
                dispatch(fetchVideoComments(videoId))
            })
            .catch(err => {
                dispatch({
                    type: SAVE_COMMENT_ERROR,
                    error: err
                })
            })
    };
}

export {
    fetchVideos,
    fetchVideo,
    fetchVideoComments,
    saveComments
}
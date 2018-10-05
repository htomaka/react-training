import {FETCH_VIDEO_COMMENTS_SUCCESS} from "../actions";

const defaultState = [];

export default function (state = defaultState, action) {
    if (action.type === FETCH_VIDEO_COMMENTS_SUCCESS) {
        return action.comments;
    }

    return state;
}
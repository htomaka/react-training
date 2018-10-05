import {FETCH_VIDEO_SUCCESS} from "../actions";

const defaultState = null;

export default function (state = defaultState, action) {
    if (action.type === FETCH_VIDEO_SUCCESS) {
        return action.video
    }

    return state;
}
import {FETCH_VIDEOS_SUCCESS} from "../actions";

const defaultState = [];

export default function(state = defaultState, action){
    if (action.type === FETCH_VIDEOS_SUCCESS) {
        return action.videos;
    }

    return state;
}
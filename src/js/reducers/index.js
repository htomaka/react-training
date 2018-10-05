import {combineReducers} from "redux";
import videos from "./videos";
import activeVideo from "./activeVideo";
import comments from "./comments";

const rootReducer = combineReducers({
    videos,
    activeVideo,
    comments
});

export default rootReducer;
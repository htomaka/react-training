import {applyMiddleware, compose, createStore} from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
import {connectRouter, routerMiddleware} from 'connected-react-router';

export default function (browserHistory, initialState = {}) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        connectRouter(browserHistory)(reducer),
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunk,
                routerMiddleware(browserHistory)
            )
        ));
}
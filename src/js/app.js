import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import VideoList from "./containers/VideoList";
import Video from "./containers/Video";
import VideoForm from './containers/VideoForm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <Video/>
    </Provider>,
    document.getElementById('appContainer')
);
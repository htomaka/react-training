import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {createBrowserHistory} from 'history';
import {ConnectedRouter} from 'connected-react-router';
import config from 'config';
import Layout from "./containers/Layout";

const browserHistory = createBrowserHistory({
    basename: config.basePath
});

const store = configureStore(browserHistory);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <Layout/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('appContainer')
);
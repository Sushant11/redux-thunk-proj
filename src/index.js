import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

import './style/global.css';
import App from './containers/App'
import appStore from './store/appStore';
import * as serviceWorker from './serviceWorker';
import history from './utility/history';

const mountNode = document.getElementById('root')
const store = appStore({}, history);

ReactDOM.render(
    <Suspense fallback={<div className="loader-container">Error! Please refresh the page</div>}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router basename={process.env.PUBLIC_URL} history={history}>
                    <App/>
                </Router>
            </ConnectedRouter>
        </Provider>
    </Suspense>,
    mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

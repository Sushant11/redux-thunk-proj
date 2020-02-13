import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const appStore = (initialState = {}, history) => {
    // Add middleware
    // 1. thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    // 2. routerMiddleware: Syncs the location/URL path to the state

    const middlewares = [ thunk, routerMiddleware(history)];

    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
};

export default appStore;

import {combineReducers} from 'redux';
import {connectRouter} from "connected-react-router";

import history from '../utility/history';

import jokesReducer from './jokesReducer';

const rootReducer = combineReducers({
    router: connectRouter(history),
    jokes: jokesReducer,
});

export default rootReducer;

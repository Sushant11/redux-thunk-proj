import {
   JOKE_FETCH_REQUEST,
   JOKE_FETCH_REQUEST_SUCCESS,
   JOKE_FETCH_REQUEST_FAILURE,
   JOKE_CLEAN_REQUEST
} from '../actions/actionTypes'

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const jokesReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case JOKE_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case JOKE_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case JOKE_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case JOKE_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                loading: false,
                errors: {},
            });

        default:
            return state;
    }
};

export default jokesReducer;

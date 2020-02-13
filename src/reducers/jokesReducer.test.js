
import jokesReducer from './jokesReducer';
import {
   JOKE_FETCH_REQUEST,
   JOKE_FETCH_REQUEST_SUCCESS,
   JOKE_FETCH_REQUEST_FAILURE,
   JOKE_CLEAN_REQUEST
} from '../actions/actionTypes';

import mockResponse from '../__mock__/joke';

const payload = mockResponse.jokes;
const error = mockResponse.jokes.error;

describe('REDUCER --- jokesReducer', () => {
    it('should return theJOKE_INITIAL_STATE', () => {
        const INITIAL_STATE = {
            payload: [],
            loading: false,
            errors: {},
        };
        expect(jokesReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle the JOKE_FETCH_REQUEST', () => {
        const INITIAL_STATE = {
            loading: true,
        };
        const state = jokesReducer(INITIAL_STATE, {
            type:JOKE_FETCH_REQUEST,
        });
        expect(state).toEqual({loading: true});
    });

    it('should handle the JOKE_FETCH_REQUEST_SUCCESS', () => {
        const INITIAL_STATE = {
            payload: [],
            loading: false,
            errors: {},
        };
        const state = jokesReducer(INITIAL_STATE, {
            type:JOKE_FETCH_REQUEST_SUCCESS,
            data: payload,
        });
        expect(state).toEqual({
            payload: payload,
            loading: false,
            errors: {},
        });
    });

    it('should handle the JOKE_FETCH_REQUEST_FAILURE', () => {
        const INITIAL_STATE = {
            loading: false,
            errors: {},
        };
        const state = jokesReducer(INITIAL_STATE, {
            type:JOKE_FETCH_REQUEST_FAILURE,
            error: error,
        });
        expect(state).toEqual({loading: false, errors: error});
    });

    it('should handle the JOKE_CLEAN_REQUEST', () => {
        const INITIAL_STATE = {
            loading: true,
        };
        const state = jokesReducer(INITIAL_STATE, {
            type:JOKE_CLEAN_REQUEST,
        });
        expect(state).toEqual({
            loading: false,
            payload: [],
            errors: {},
        });
    });
});

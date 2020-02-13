import {
    jokeFetchRequest,
    jokeFetchRequestSuccess,
    jokeFetchRequestFailure,
} from './jokeAction';

import {
    JOKE_FETCH_REQUEST,
    JOKE_FETCH_REQUEST_SUCCESS,
    JOKE_FETCH_REQUEST_FAILURE,
} from './actionTypes';

import mockResponse from '../../__mock__/joke';

describe('ACTION --- jokeAction', () => {

    it('should handle JOKE_FETCH_REQUEST', () => {
        const fetchRequest = jokeFetchRequest();
        expect(fetchRequest).toEqual({type: JOKE_FETCH_REQUEST});
    });

    it('should handle JOKE_FETCH_REQUEST_SUCCESS', () => {
        const fetchRequest = jokeFetchRequestSuccess(mockResponse.jokeList);
        expect(fetchRequest).toEqual({
            type: JOKE_FETCH_REQUEST_SUCCESS,
            data: mockResponse.jokeList,
        });
    });

    it('should handle JOKE_FETCH_REQUEST_FAILURE', () => {
        const fetchRequest = jokeFetchRequestFailure(mockResponse.jokeErrors.data);
        expect(fetchRequest).toEqual({
            type: JOKE_FETCH_REQUEST_FAILURE,
            error: mockResponse.jokeErrors.data,
        });
    });
});

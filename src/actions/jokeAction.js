import {
  JOKE_FETCH_REQUEST,
  JOKE_FETCH_REQUEST_SUCCESS,
  JOKE_FETCH_REQUEST_FAILURE,
  JOKE_CLEAN_REQUEST
} from "./actionTypes";

export const jokeFetchRequest = () => {
  return {
    type: JOKE_FETCH_REQUEST
  };
};

export const jokeFetchRequestSuccess = data => {
  return {
    type: JOKE_FETCH_REQUEST_SUCCESS,
    data
  };
};

export const jokeFetchRequestFailure = error => {
  return {
    type: JOKE_FETCH_REQUEST_FAILURE,
    error
  };
};

export const jokeCleanRequest = () => {
  return {
      type: JOKE_CLEAN_REQUEST,
  };
};
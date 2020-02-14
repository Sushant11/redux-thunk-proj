import {
  jokeFetchRequest,
  jokeFetchRequestSuccess,
  jokeFetchRequestFailure
} from "../actions/jokeAction";

import { fetch } from "../utility/apifile";

export const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export const fetchJoke = formData => {
  return dispatch => {
    dispatch(jokeFetchRequest());
    return fetch(
      // formData === undefined
      //   ? `Any`
      //   : `${formData.category}?blacklistFlags=${formData.flags}&type=${formData.type}&contains=${formData.contains}`
      'Any'
    )
      .then(response => {
        if (response.status === 200) {
          dispatch(jokeFetchRequestSuccess(response));
        } else {
          // TODO
        }
      })
      .catch(error => dispatch(jokeFetchRequestFailure(error.Error)));
  };
};

export const fetchCustomJoke = formData => {
  return dispatch => {
    dispatch(jokeFetchRequest());
    return fetch(
     `${formData.category ? formData.category : ''}${formData.flags ? `?blacklistFlags=${formData.flags}` : ''}${formData.type ? `?type=${formData.type}` : ''}${formData.contains ? `?contains=${formData.contains}` : ''}`
    )
      .then(response => {
        if (response.status === 200) {
          dispatch(jokeFetchRequestSuccess(response));
        } else {
          // TODO
        }
      })
      .catch(error => dispatch(jokeFetchRequestFailure(error.Error)));
  };
};



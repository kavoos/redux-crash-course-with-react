import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  NEW_POST,
} from './types';

export const fetchItems = () => (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: data,
      })).catch(error => dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: {
          message: error.message ? error.message : 'Oops, something went wrong during fetching posts!',
        },
      }));
  }, 5000);
};

export const createItem = postData => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then(res => res.json())
    .then(data => dispatch({
      type: NEW_POST,
      payload: data,
    }));
};

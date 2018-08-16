import { FETCH_POSTS_SUCCESS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;

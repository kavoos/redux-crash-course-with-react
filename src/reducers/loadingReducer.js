const initialState = {};

const loadingReducer = (state = initialState, action) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving FETCH_POSTS_REQUEST
    //      and false when receiving FETCH_POSTS_SUCCESS / FETCH_POSTS_FAILURE
    [requestName]: requestState === 'REQUEST',
  };
};

export default loadingReducer;

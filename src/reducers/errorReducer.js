const initialState = {};

const errorReducer = (state = initialState, action) => {
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(action.type);

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store errorMessage
    // e.g. stores errorMessage when receiving FETCH_POSTS_FAILURE
    //      else clear errorMessage when receiving FETCH_POSTS_REQUEST
    [requestName]: requestState === 'FAILURE' ? action.payload.message : '',
  };
};

export default errorReducer;

import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import postReducer from './postReducer';

export default combineReducers({
  errorReducer,
  loadingReducer,
  postReducer,
});

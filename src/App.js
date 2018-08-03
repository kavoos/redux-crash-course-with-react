import React from 'react';

import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';

const App = () => (
  <Provider store={store}>
    <div>
      <PostForm />
      <Posts />
    </div>
  </Provider>
);

export default App;

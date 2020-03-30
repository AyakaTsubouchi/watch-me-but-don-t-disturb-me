import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './components/store/reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers here
import reducers from './reducers/index';
import { verifyLogin } from './actions/actions';


// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  // ADD REDUCERS
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(verifyLogin());

export default store;
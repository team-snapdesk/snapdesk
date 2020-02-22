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

import { createStore } from 'redux';
import reducers from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
 


// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  // ADD REDUCERS
  reducers,
  composeWithDevTools()
);

export default store;
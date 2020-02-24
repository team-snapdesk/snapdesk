/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date 2/21/20
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import ticketsReducer from './ticketsReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  tickets: ticketsReducer,
});

// make the combined reducers available for import
export default reducers;

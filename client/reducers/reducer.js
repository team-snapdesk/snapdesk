/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';
import axios from 'axios';

const initialState = {
  placeholder: 0,
  isLoggedIn: false
};

const mainReducer = (state = initialState, action) => {

  switch (action.type) {
    // add cases here
    case types.USER_LOGIN:

    default:
      return state
  }
}

export default mainReducer;
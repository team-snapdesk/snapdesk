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

const initialState = {
  placeholder: 0
};

const mainReducer = (state=initialState, action) => {

  switch(action.type) {
    // add cases here

    default: 
      return state
  }
}

export default mainReducer;
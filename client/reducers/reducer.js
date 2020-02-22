/**
 * ************************************
 *
 * @module  ticketsReducer
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

const ticketsReducer = (state = initialState, action) => {

  switch (action.type) {
    // add cases here

    default:
      return state
  }
}

export default ticketsReducer;
/**
 * ************************************
 *
 * @module  ticketsReducer
 * @author
 * @date
 * @description reducer for ticket data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  totalSnaps: 0,
  messageInput: '',
  messageRating: 0,
  messageTopic: '',
};

const ticketsReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.POST_TICKET:
      return { ...state };

    case types.ACCEPT_TICKET:
      return { ...state };

    case types.CANCEL_ACCEPT:
      return { ...state };

    case types.DELETE_TICKET:
      return { ...state };

    case types.RESOLVE_TICKET:
      return { ...state };

    default:
      return state
  }
}

export default ticketsReducer;
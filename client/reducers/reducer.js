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
  messageRating: '',
  activeTickets: [],
  ticketsCount: 0,
};

const ticketsReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.POST_TICKET:
      const newTicket = {
        messageInput: state.messageInput,
        messageRating: state.messageRating,
      };
      const updatedTickets = state.activeTickets.slice();
      updatedTickets.push(newTicket);

      return { ...state,
       activeTickets: updatedTickets,
       ticketsCount: state.ticketsCount + 1,
       messageInput: '',
       messageRating: ''
      };

    case types.ACCEPT_TICKET:
      return { ...state };

    case types.CANCEL_ACCEPT:
      return { ...state };

    case types.DELETE_TICKET:
      return { ...state };

    case types.RESOLVE_TICKET:
      return { ...state };

    case types.UPDATE_MESSAGE:
      return { ...state,
        messageInput: action.payload
      };

    case types.UPDATE_RATING:
      return { ...state,
        messageRating: action.payload
      };

    default:
      return state
  }
}

export default ticketsReducer;
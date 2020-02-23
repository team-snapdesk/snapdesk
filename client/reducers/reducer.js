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
  messageRating: 1,
  activeTickets: [],
  ticketsCount: 0,
};

const ticketsReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.POST_TICKET:
      const newTicket = {
        messageInput: action.payload.ticket.messageInput,
        messageRating: action.payload.ticket.messageRating,
      };
      const updatedTickets = state.activeTickets.slice();
      updatedTickets.concat(newTicket);

      return { ...state,
       activeTickets: updatedTickets,
       ticketsCount: ticketsCount + 1,
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
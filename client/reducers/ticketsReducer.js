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

const ticketState = {
  totalSnaps: 0,
  messageInput: '',
  messageRating: '',
  activeTickets: [],
  ticketsCount: 0,
};

const ticketsReducer = (state = ticketState, action) => {
  switch (action.type) {
    // case types.USER_LOGIN:
    //   console.log(action);
    //   const isLoggedIn = action.payload.isLoggedIn;
    //   return {
    //     ...state,
    //     isLoggedIn
    //   };
    case types.GET_TICKETS:


    case types.POST_TICKET:
      // build new ticket object to be inserted into activeTickets array (use props from FeedContainer)
      const newTicket = {
        messageInput: state.messageInput,
        messageRating: state.messageRating,
      };
      // make a shallow copy of existing array and push new ticket to it
      const updatedTickets = state.activeTickets.slice();
      updatedTickets.push(newTicket);
      // return updated state and reset message input/ratings to blank
      return {
        ...state,
        activeTickets: updatedTickets,
        ticketsCount: state.ticketsCount + 1,
        messageInput: '',
        messageRating: '',
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
      return { ...state, messageInput: action.payload };

    case types.UPDATE_RATING:
      return { ...state, messageRating: action.payload };

    default:
      return state;
  }
};

export default ticketsReducer;

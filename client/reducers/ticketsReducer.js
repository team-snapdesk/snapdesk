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

import * as types from "../constants/actionTypes";

const ticketState = {
  topic: 'select',
  totalSnaps: 0,
  messageInput: "",
  messageRating: 1,
  activeTickets: [],
  ticketsCount: 0,
  resolveModal: {
    show: false,
    messageInput: '',
    messageId: 0,
    feedback: '',
    finalSnaps: 0
  }
};

const ticketsReducer = (state = ticketState, action) => {
  let idx;
  switch (action.type) {
    case types.USER_LOGOUT:
      return ticketState;

    case types.UPDATE_MESSAGE:
      return { ...state, messageInput: action.payload };

    case types.UPDATE_RATING:
      return { ...state, messageRating: action.payload };

    case types.GET_TICKETS:
      return {
        ...state,
        activeTickets: action.payload,
        ticketsCount: action.payload.length,
      };

    case types.CHOOSE_TOPIC:
      return {
        ...state,
        topic: action.payload
      }

    case types.POST_TICKET:
      // build new ticket object to be inserted into activeTickets array (use props from FeedContainer)
      const newTicket = {
        messageInput: state.messageInput,
        messageRating: state.messageRating,
        messageId: action.payload.ticketId,
        menteeId: action.payload.menteeId,
        timestamp: action.payload.timestamp,
        topic: state.topic,
        status: "active"
      };
      // make a shallow copy of existing array and push new ticket to it
      let updatedTickets = state.activeTickets.slice();
      updatedTickets.push(newTicket);
      // return updated state and reset message input/ratings to blank
      return {
        ...state,
        activeTickets: updatedTickets,
        ticketsCount: state.ticketsCount + 1,
        nextTicketId: state.nextTicketId + 1,
        messageInput: "",
        messageRating: 1,
        topic: 'select'
      };

      case types.DELETE_TICKET:
        updatedTickets = state.activeTickets.filter(
          ticket => ticket.messageId !== action.payload
        );
        return {
          ...state,
          activeTickets: updatedTickets,
          ticketsCount: state.ticketsCount - 1
        };
  
      case types.RESOLVE_TICKET:
        updatedTickets = state.activeTickets.filter(
          ticket => ticket.messageId !== action.payload
        );
        return {
          ...state,
          activeTickets: updatedTickets,
          ticketsCount: state.ticketsCount - 1,
          resolveModal: {
            show: false,
            feedback: '',
            finalSnaps: 0
          }
        };

    case types.TOGGLE_MODAL:
      const { messageInput, messageId, messageRating } = action.payload;
      return {
        ...state,
        resolveModal: {
          show: state.resolveModal.show ? false : true,
          messageInput: messageInput ? messageInput : '',
          messageId: messageId ? messageId : 0,
          feedback: '',
          finalSnaps: messageRating ? messageRating : 0
        }
      }

    case types.UPDATE_FEEDBACK:
      return {
        ...state,
        resolveModal: {
          ...state.resolveModal,
          feedback: action.payload
        }
      }

    case types.UPDATE_FINAL_RATING:
      return {
        ...state,
        resolveModal: {
          ...state.resolveModal,
          finalSnaps: action.payload
        }
      }

    case types.ACCEPT_TICKET:
      updatedTickets = state.activeTickets.map((ticket) => {
        if (ticket.messageId === action.payload.id) {
          ticket.status = 'pending';
          ticket.mentorId = action.payload.mentorId;
        }
        return ticket;
      })
      return {
        ...state,
        activeTickets: updatedTickets
      };

    case types.CANCEL_ACCEPT:
      updatedTickets = state.activeTickets.map((ticket) => {
        if (ticket.messageId === action.payload.ticketId) {
          ticket.status = 'active'
          ticket.mentorId = null
        }
        return ticket;
      });
      return {
        ...state,
        activeTickets: updatedTickets
      };

    default:
      return state;
  }
};

export default ticketsReducer;

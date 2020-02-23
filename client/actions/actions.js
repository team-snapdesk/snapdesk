/**
 * ************************************
 *
 * @module  actions.js
 * @author team snapdesk
 * @date 02/22/2020
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

export const postTicket = event => (dispatch, getState) => {
  event.preventDefault();
  const ticket = {
    messageInput: getState().tickets.messageInput,
    messageRating: getState().tickets.messageRating,
    messageTopic: getState().tickets.messageTopic
  }
  if (ticket.messageInput && ticket.messageRating && ticket.messageTopic) {
    dispatch({
      type: types.POST_TICKET,
      payload: ticket,
    });
  }
};

// export const acceptTicket = event => (dispatch, getState) => {
//   event.preventDefault();
//   dispatch({
//     type: types.ACCEPT_TICKET,
//     payload: ticket,
//   })
// }
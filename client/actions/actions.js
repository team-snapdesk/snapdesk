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
import axios from 'axios';

export const verifyLogin = () => (
  axios.get('/login/verify')
    .then(({ isLoggedIn }) => ({
      type: types.USER_LOGIN,
      payload: null,
    })
    )
    .catch(err => console.log(err))
)

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
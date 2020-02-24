/**
 * ************************************
 *
 * @module  ticketActions.js
 * @author team snapdesk
 * @date 02/22/2020
 * @description Action Creators for ticketReducer
 *
 * ************************************
 */

// import actionType constants
import axios from 'axios';
import * as types from '../constants/actionTypes';

export const postTicket = () => (dispatch, getState) =>
  axios
    .post('/api/tickets', {
      mentee_id: getState().user.userId,
      message: getState().tickets.messageInput,
      status: 'active',
      snaps_given: getState().tickets.messageRating,
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGIN,
          payload: data,
        })
      }
      else {
        dispatch({
          type: types.POST_TICKET,
          payload: data,
        })
      }     
      })

export const getTickets = () => dispatch =>
  axios
    .get('/api/tickets')
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGIN,
          payload: data,
        })
      }
      else {
        dispatch({
          type: types.LOAD_USER,
          payload: data.user,
        })
      }     
      })

export const updateMessage = data => ({
  type: types.UPDATE_MESSAGE,
  payload: data,
});

export const updateRating = data => ({
  type: types.UPDATE_RATING,
  payload: data,
});
// export const acceptTicket = event => (dispatch, getState) => {
//   event.preventDefault();
//   dispatch({
//     type: types.ACCEPT_TICKET,
//     payload: ticket,
//   })
// }

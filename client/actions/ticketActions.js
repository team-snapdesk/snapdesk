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
import axios from "axios";
import * as types from "../constants/actionTypes";

export const postTicket = () => (dispatch, getState) =>
  axios
    .post("/api/tickets", {
      mentee_id: getState().user.userId,
      message: getState().tickets.messageInput,
      status: "active",
      snaps_given: getState().tickets.messageRating
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
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
          type: types.USER_LOGOUT,
          payload: data,
        })
      }
      else {
        dispatch({
          type: types.GET_TICKETS,
          payload: data.activeTickets || [],
        })
      }
    })


export const updateMessage = event => ({
  type: types.UPDATE_MESSAGE,
  payload: event.target.value
});

export const updateRating = id => ({
  type: types.UPDATE_RATING,
  payload: id,
});

export const deleteTicket = id => (dispatch, getState) =>
  axios
    .put("/api/tickets/delete", {
      ticketId: id,
      status: "deleted"
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        dispatch({
          type: types.DELETE_TICKET,

          payload: id,
        })
      }
    })

//START CODE REVIEW -----------------
// export const resolveTicket = id => (dispatch, getState) => 
//   axios
//   .put('..insert path here...', {
//     ticketId : id,
//     status: 'resolved',
//     //feedback??
//   })
//   .then(({data}) => {
//     if(!data.isLoggedIn) {
//       dispatch({
//         type: types.USER_LOGOUT,
//         payload: data,
//       })
//     } 
//     else {
//       dispatch({
//         type: types.RESOLVE_TICKET,
//         payload: id,
//       })
//     }
//   })

// END CODE REVIEW ------------


export const resolveTicket = id => ({
  type: types.RESOLVE_TICKET,
  payload: id
});



export const acceptTicket = id => (dispatch, getState) =>
  axios
    .put('/api/tickets/accept', {
      ticketId: id,
      status: 'pending',
      mentorId: getState().user.userId
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data,
        })
      }
      else {
        console.log('ticketId', id);
        dispatch({
          type: types.ACCEPT_TICKET,
          payload: {
            id,
            mentorId: getState().user.userId,
          }
        })
      }
    })

export const cancelAccept = id => ({
  type: types.CANCEL_ACCEPT,
  payload: id
});

// export const acceptTicket = event => (dispatch, getState) => {
//   event.preventDefault();
//   dispatch({
//     type: types.ACCEPT_TICKET,
//     payload: ticket,
//   })
// }

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


export const updateMessage = event => ({
  type: types.UPDATE_MESSAGE,
  payload: event.target.value
});

export const updateRating = value => ({
  type: types.UPDATE_RATING,
  payload: value,
});

export const toggleModal = messageRating => ({
  type: types.TOGGLE_MODAL,
  payload: messageRating
});

export const updateFeedback = event => ({
  type: types.UPDATE_FEEDBACK,
  payload: event.target.value
});

export const updateFinalRating = value => ({
  type: types.UPDATE_FINAL_RATING,
  payload: value,
});

export const getTickets = () => dispatch => {
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
}


export const postTicket = () => (dispatch, getState) => {
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
}

export const deleteTicket = id => (dispatch, getState) => {
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
}


export const resolveTicket = id => (dispatch, getState) => {
  axios
  .put('/api/tickets/resolved', {
    messageId : id,
    status: 'resolved',
    messageRating: getState().tickets.resolveModal.finalSnaps,
    feedback: getState().tickets.resolveModal.feedback,
  })
  .then(({data}) => {
    if(!data.isLoggedIn) {
      dispatch({
        type: types.USER_LOGOUT,
        payload: data,
      })
    } 
    else {
      dispatch({
        type: types.RESOLVE_TICKET,
        payload: id,
      })
    }
  })
}


export const acceptTicket = id => (dispatch, getState) => {
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
        dispatch({
          type: types.ACCEPT_TICKET,
          payload: {
            id,
            mentorId: getState().user.userId,
          }
        })
      }
    })
};

export const cancelAccept = id => (dispatch, getState) => {
  axios
    .put('/api/tickets/accept', {
      ticketId: id,
      status: 'active',
      mentorId: getState().user.userId
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data,
        })
      } else {
        dispatch({
          type: types.CANCEL_ACCEPT,
          payload: {
            ticketId: id,
            status: 'active',
            mentorId: null
          }
        })
      }
    })
};

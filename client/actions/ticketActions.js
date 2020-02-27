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

export const postTicket = roomId => (dispatch, getState) =>
  // this part is why thunk is necessary to delay the firing of the dispatch handlers
  axios
    .post("/api/tickets", {
      // POST request to create a new ticket
      mentee_id: getState().user.userId,
      room_id: getState().rooms.activeRoom.id,
      message: getState().tickets.messageInput,
      status: "active",
      snaps_given: getState().tickets.messageRating
    })
    .then(({ data }) => {
      // check if the returned user is logged in, if not, reroute
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        // if they're still logged in, continue with new ticket request
        dispatch({
          type: types.POST_TICKET,
          payload: data
        });
      }
    });

export const getTickets = roomId => dispatch =>
  // get all active tickets from the DB. the timer for this is configurable from FeedContainer.jsx
  axios.get("/api/tickets/" + roomId).then(({ data }) => {
    if (!data.isLoggedIn) {
      dispatch({
        type: types.USER_LOGOUT,
        payload: data
      });
    }
    // if the user is logged in, get all active tickets. if the DB request returns undefined, forward an empty array to reducer.
    else {
      dispatch({
        type: types.GET_TICKETS,
        payload: data.activeTickets || []
      });
    }
  });

export const updateMessage = event => ({
  type: types.UPDATE_MESSAGE,
  payload: event.target.value
});

export const updateRating = event => ({
  type: types.UPDATE_RATING,
  payload: event.target.value
});

export const deleteTicket = id => (dispatch, getState) =>
  // don't actually delete the ticket from the DB, just set status to deleted so it isn't displayed
  axios
    .put("/api/tickets/update", {
      ticketId: id,
      status: "deleted",
      mentorId: null
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
          payload: id
        });
      }
    });

export const resolveTicket = id => (dispatch, getState) =>
  axios
    .put("/api/tickets/update", {
      ticketId: id,
      status: "resolved",
      mentorId: getState().user.userId
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        dispatch({
          type: types.RESOLVE_TICKET,
          payload: id
        });
      }
    });

export const acceptTicket = ticket => (dispatch, getState) =>
  axios
    .put("/api/tickets/update", {
      ticketId: ticket.messageId,
      status: "pending",
      mentorId: getState().user.userId
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        dispatch({
          type: types.ACCEPT_TICKET,
          payload: data.messageId
        });
      }
    });

export const cancelAccept = id => dispatch =>
  axios
    .put("/api/tickets/update", {
      ticketId: id,
      status: "active",
      mentorId: null
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: res
        });
      } else {
        dispatch({
          type: types.CANCEL_ACCEPT,
          payload: id
        });
      }
    });

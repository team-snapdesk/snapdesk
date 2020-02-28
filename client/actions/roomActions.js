/**
 * ************************************
 *
 * @module  roomActions.js
 * @author team snapdesk
 * @date 02/25/2020
 * @description Action Creators for roomsReducer
 *
 * ************************************
 */

import axios from "axios";
import * as types from "../constants/actionTypes";

export const getRooms = userId => dispatch => {
  axios.get("/api/rooms/" + userId).then(({ data }) => {
    if (!data.isLoggedIn) {
      dispatch({
        type: types.USER_LOGOUT,
        payload: data
      });
    } else if (data.rooms.length > 0) {
      dispatch({
        type: types.LOAD_ROOMS,
        payload: data
      });
    }
  });
};

export const updateNewRoom = input => dispatch => {
  dispatch({
    type: types.UPDATE_NEWROOM,
    payload: input
  }).catch(err => console.log(err));
};

export const addRoom = () => (dispatch, getState) => {
  // this part is why thunk is necessary to delay the firing of the dispatch handlers
  axios
    .post("/api/rooms", {
      // POST request to create a new ticket
      name: getState().rooms.newRoom,
      admin: getState().user.userId
    })
    .then(({ data }) => {
      // check if the returned user is logged in, if not, reroute
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        // if they're still logged in, continue with loading new room
        dispatch({
          type: types.ADD_ROOM,
          payload: data
        });
      }
    });
};

export const updateActiveRoom = (newActiveRoomId, userId) => dispatch => {
  axios
    .put("/api/rooms/" + userId, {
      roomId: newActiveRoomId,
      userId: userId
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        dispatch({
          type: types.UPDATE_ACTIVEROOM,
          payload: data
        });
      }
    });
};

export const joinRoom = () => (dispatch, getState) => {
  axios
    .post("/api/rooms/joinRoom", {
      roomName: getState().rooms.joinRoomName,
      userId: getState().user.userId
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        dispatch({
          type: types.LOAD_ROOMS,
          payload: data
        });
      }
    });
};

export const updateJoinRoomName = input => dispatch => {
  dispatch({
    type: types.UPDATE_JOINROOMNAME,
    payload: input
  });
};

export const banUser = (userId, roomId, status) => dispatch => {
  status === "ban" ? status = true : status = false;
  axios
    .put("/api/rooms/admin", {
      userId: userId,
      roomId: roomId,
      banStatus: status
    }).then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        dispatch({
          type: types.UPDATE_ACTIVEROOM,
          payload: data
        })
      }
    })

}

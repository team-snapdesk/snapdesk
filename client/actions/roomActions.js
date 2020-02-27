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

export const getRooms = userId => dispatch =>
  axios
    .get("/api/rooms/" + userId)
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else if (data.rooms.length > 0) {
        dispatch({
          type: types.LOAD_ROOMS,
          payload: data
          // {
          //   activeRoom: { id: 3, name: "testroom3", admin: 3 },
          //   rooms: [
          //     { id: 3, name: "testroom3", admin: 3 },
          //     { id: 4, name: "testroom4", admin: 3 },
          //     { id: 5, name: "testroom5", admin: 3 }
          //   ]
          // }
        });
      }
    })
    .catch(err => console.log(err));

export const updateNewRoom = input => dispatch => {
  dispatch({
    type: types.UPDATE_NEWROOM,
    payload: input
  });
};

export const addRoom = () => (dispatch, getState) => {
  // console.log('ADD ROOM: ', name);
  // this part is why thunk is necessary to delay the firing of the dispatch handlers
  axios
    .post("/api/rooms", {
      // POST request to create a new ticket
      name: getState().rooms.newRoom,
      admin: getState().user.userId
    })
    .then(({ data }) => {
      // check if the returned user is logged in, if not, reroute
      // console.log('POST ROOM ACTION DATA: ', data);
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

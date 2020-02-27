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

// import actionType constants
import axios from 'axios';
import * as types from '../constants/actionTypes';

export const addRoom = (name) => (dispatch, getState) => {
  // console.log('ADD ROOM: ', name);
  // this part is why thunk is necessary to delay the firing of the dispatch handlers
  axios
    .post('/api/rooms', {
      // POST request to create a new ticket
      name: name,
      admin: getState().user.userId,
    })
    .then(({ data }) => {
      // check if the returned user is logged in, if not, reroute
      // console.log('POST ROOM ACTION DATA: ', data);
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data,
        })
      }
      else {
        // if they're still logged in, continue with new ticket request
        dispatch({
          type: types.POST_TICKET,
          payload: data,
        })
      }     
    })
  }
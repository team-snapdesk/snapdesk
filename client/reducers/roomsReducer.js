/**
 * ************************************
 *
 * @module  roomsReducer
 * @author team snapdesk
 * @date 02/25/20
 * @description reducer for rooms data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const roomState = {
  activeRoom: { id: null, name: "Choose a room", admin: null},
  rooms: []
}

const roomsReducer = (state = roomState, action) => {
  
  switch (action.type) {
    case types.ADD_ROOM:
      return {
        ...state,
        activeRoom: action.payload.roomName,
        roomId: action.payload.roomId,
        roomAdmin: action.payload.roomAdmin
      };

    default:
      return state;
  }

}

export default roomsReducer;
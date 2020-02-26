/**
 * ************************************
 *
 * @module
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

const roomsState = {
  activeRoom: { name: "Choose a room" },
  rooms: []
};

const roomsReducer = (state = roomsState, action) => {
  switch (action.type) {
    case types.LOAD_ROOMS:
      return {
        ...state,
        activeRoom: action.payload.activeRoom,
        rooms: action.payload.rooms
      };

    default:
      return state;
  }
};

export default roomsReducer;

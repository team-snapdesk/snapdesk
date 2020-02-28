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

import * as types from "../constants/actionTypes";

const roomState = {
  activeRoom: { id: null, name: "Choose a room", admin: null, users: [] },
  rooms: [],
  newRoom: "",
  joinRoomName: ""
};

const roomsReducer = (state = roomState, action) => {
  switch (action.type) {
    case types.LOAD_ROOMS:
      return {
        ...state,
        activeRoom: action.payload.activeRoom,
        rooms: action.payload.rooms,
        newRoom: "",
        joinRoomName: ""
      };
    case types.UPDATE_NEWROOM:
      return {
        ...state,
        newRoom: action.payload
      };
    case types.ADD_ROOM:
      return {
        ...state,
        activeRoom: action.payload.activeRoom,
        newRoom: ""
      };
    case types.UPDATE_ACTIVEROOM:
      return {
        ...state,
        activeRoom: action.payload.activeRoom
      };
    case types.UPDATE_JOINROOMNAME:
      return {
        ...state,
        joinRoomName: action.payload
      };
    default:
      return state;
  }
};

export default roomsReducer;

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
  activeRoom: 1,
}

const ticketsReducer = (state = roomState, action) => {
  
  switch (action.type) {
    case types.ADD_ROOM:
      return state;

    default:
      return state;
  }

}
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

import axios from "axios";
import * as types from "../constants/actionTypes";

export const getRooms = userId => dispatch =>
  axios
    .get("INSERT BACKEND ROUTE HERE/" + userId)
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
        });
      }
    })
    .catch(err => console.log(err));

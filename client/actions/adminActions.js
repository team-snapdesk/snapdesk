/**
 * ************************************
 *
 * @module  adminActions.js
 * @author  Brian Chiang
 * @date
 * @description
 *
 * ************************************
 */

import axios from 'axios';
import * as types from '../constants/actionTypes';

export const getMentors = () => (dispatch, getState) =>
  axios
    .post('/api/organizations', {
      orgID: getState.user.orgID
    })
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data
        });
      } else {
        dispatch({
          type: types.GET_MENTORS,
          payload: data
        });
      }
    });

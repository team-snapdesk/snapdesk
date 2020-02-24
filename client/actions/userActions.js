/**
 * ************************************
 *
 * @module  userActions.js
 * @author team snapdesk
 * @date 02/23/2020
 * @description Action Creators for userReducer
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';
import axios from 'axios';

export const verifyLogin = () => (dispatch) => {
  return axios.get('/login/verify')
    .then(({ data }) => {
      return dispatch({
        type: types.USER_LOGIN,
        payload: data
      });
    })
    .catch(err => console.log(err))
}
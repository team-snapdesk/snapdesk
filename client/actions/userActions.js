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
import axios from 'axios';
import * as types from '../constants/actionTypes';

export const verifyLogin = () => dispatch => 
  axios
    .get('/login/verify')
    .then(({ data }) => {
    if (!data.isLoggedIn) {
      return dispatch({
        type: types.USER_LOGOUT,
        payload: data,
      });
    } else {
      return dispatch({
        type: types.USER_LOGIN,
        payload: data,
      });
    }
    })
    .catch(err => console.log(err));

export const getUserData = () => dispatch => 
  axios
    .get('/api/user')
    .then(({ data }) => {
      if (!data.isLoggedIn) {
        dispatch({
          type: types.USER_LOGOUT,
          payload: data,
        })
      }
      else {
        dispatch({
          type: types.LOAD_USER,
          payload: data.user,
        })
      }
    })

export const updatePage = (page) => ({
  type: types.USER_PAGE,
  payload: page,
})

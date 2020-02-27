/**
 * ************************************
 *
 * @module  userReducer
 * @author Joshua Nordstrom
 * @date 2/23/20
 * @description reducer to maintain the state of user data
 *
 * ************************************
 */
import * as types from '../constants/actionTypes';

const userState = {
  isLoggedIn: false,
  userId: '',
  userName: '',
  userBio: '',
  userAvatar: '',
  currPage: 'main',
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case types.USER_LOGOUT:
      return {
        userId: '',
        userName: '',
        userBio: '',
        userAvatar: '',
        isLoggedIn: false,
      }
    
    case types.LOAD_USER:
      // console.log('LOAD USER: ', action);
      return {
        ...state,
        userId: action.payload._id,
        userName: action.payload.name,
        userBio: action.payload.bio,
        userAvatar: action.payload.avatar_url
      }

    case types.USER_PAGE:
      return {
        ...state,
        currPage: action.payload
      }
      
    default:
      return state;
  }
};

export default userReducer;

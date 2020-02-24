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
}

const userReducer = (state=userState, action) => {
  switch(action.type) {
    case types.USER_LOGIN:
      console.log(action);
      const isLoggedIn = action.payload.isLoggedIn;
      return { 
        ...state,
        isLoggedIn
      };

    default:
      return state;
  }
}

export default userReducer;
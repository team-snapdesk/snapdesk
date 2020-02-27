import * as types from '../constants/actionTypes';

const adminState = {
  orgTickets: [],
  orgUsers: [],
  orgId: 0,
  orgName: ''
};

const adminReducer = (state = adminState, action) => {
  //need to figure out what is coming back on the action.payload
  switch (action.type) {
    case types.GET_MENTORS:
      return {
        ...state,
        orgUsers: action.payload.users
      };

    default:
      return state;
  }
};

export default adminReducer;

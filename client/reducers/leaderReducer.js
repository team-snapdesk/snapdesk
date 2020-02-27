/**
 * ************************************
 *
 * @module  leaderReducer
 * @author Kritika & Aris
 * @date 2/26/20
 * @description reducer for leaderboard by topic
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

const leaderState = {
    leaderList: [], 
};

const leaderReducer = (state = leaderState, action) => {
    switch(action.type) {
        case types.LEADER_BY_TOPIC: {
            return {
                leaderList: action.payload.leaderBoard
            }
        }

        default:
            return state;
    }

}

export default leaderReducer;
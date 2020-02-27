/**
 * ************************************
 *
 * @module  leaderActions.js
 * @author Kritika & Aris
 * @date 02/26/2020
 * @description Action Creators for leaderReducer
 *
 * ************************************
 */

// import actionType constants
import axios from "axios";
import * as types from "../constants/actionTypes";


// CHECK BACK ON THIS - NOT QUITE DONE YET**
export const getLeaderBoard = () => dispatch =>
    axios
        .get("/api/leaderboard")
        .then(({ data }) => {
            if (!data.isLoggedIn) {
              dispatch({
                type: types.USER_LOGOUT,
                payload: data,
              })
            }
            else {
                dispatch({
                    type: types.LEADER_BY_TOPIC,
                    payload: data
                })
            }
        })

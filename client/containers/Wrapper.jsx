/**
 * ************************************
 *
 * @module  Wrapper
 * @author team snapdesk
 * @date 02/22/2020
 * @description component that renders Navbars, FeedContainer and TicketCreator
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';


const mapStateToProps = ({
  tickets: totalSnaps, leaderBoard, activeTickets
}) => ({
  totalSnaps,
  leaderBoard,
  activeTickets
})

const mapDispatchToProps = dispatch => ({
  // userLogOut: () => dispatch(actions.userLogOut()),
});

const Wrapper = props => {
  if (!isLoggedIn) {
    return (
      <form method="GET" action="/login/oauth">
        <button type="submit">GitHub Login</button>
      </form>
    )
  }

  return (
    <div className="wrapper">
      <div className="row align-items-start">
        <div className="col">
          <LeftNav />
        </div>
        <div className="col">
          {/* render feed container component here */}
        </div>
        <div className="col">
          <RightNav />
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
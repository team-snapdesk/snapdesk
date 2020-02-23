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
import FeedContainer from './FeedContainer'


const mapStateToProps = ({
  tickets: totalSnaps, leaderBoard, activeTickets, messageInput, messageRating
}) => ({
  totalSnaps,
  leaderBoard,
  activeTickets,
  messageInput,
  messageRating
})

const mapDispatchToProps = dispatch => ({
  // userLogOut: () => dispatch(actions.userLogOut()),
});

const Wrapper = props => (
  <div className="wrapper">
    <div className="row align-items-start">
      <div className="col">
        <LeftNav />
      </div>
      <div className="col">
        <FeedContainer {...props}/>
      </div>
      <div className="col">
        <RightNav />
      </div>
    </div>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
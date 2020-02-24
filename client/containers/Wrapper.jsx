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
import * as actions from '../actions/ticketActions';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';
import FeedContainer from './FeedContainer'



const mapStateToProps = state => {
  return {
    totalSnaps: state.tickets.totalSnaps,
    leaderBoard: state.tickets.leaderBoard,
    activeTickets: state.tickets.activeTickets,
    messageInput: state.tickets.messageInput,
    messageRating: state.tickets.messageRating,
    ticketsCount: state.tickets.ticketsCount,
  }
}

const mapDispatchToProps = dispatch => ({
  // userLogOut: () => dispatch(actions.userLogOut()),
});

const Wrapper = props => {

  return (
    <div className="wrapper">
      <div className="row align-items-start">
        <div className="col">
          <LeftNav />
        </div>
        <div className="col">
          <FeedContainer {...props}/>
        </div>
        <div className="col">
          <RightNav ticketsCount={props.ticketsCount}/>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
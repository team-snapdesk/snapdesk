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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ticketActions from '../actions/ticketActions';
import * as userActions from '../actions/userActions';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';
import FeedContainer from './FeedContainer';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  totalSnaps: state.tickets.totalSnaps,
  leaderBoard: state.tickets.leaderBoard,
  ticketsCount: state.tickets.ticketsCount,
});

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch)

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return(
      <div className="wrapper">
        <div className="row align-items-start">
          <div className="col">
            <LeftNav />
          </div>
          <div className="col">
            <FeedContainer />
          </div>
          <div className="col">
            <RightNav ticketsCount={this.props.ticketsCount} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);

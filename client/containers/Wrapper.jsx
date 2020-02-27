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
import Profile from '../components/Profile'
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  totalSnaps: state.tickets.totalSnaps,
  leaderBoard: state.tickets.leaderBoard,
  ticketsCount: state.tickets.ticketsCount,
  userAvatar: state.user.userAvatar,
  userName:state.user.userName,
  currPage: state.user.currPage,
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
    let component;

    if (this.props.currPage == 'main') {
      component = (
        <div className="feedContainer col-8">
          <FeedContainer />
        </div>
      );
    }
    else if (this.props.currPage == 'profile') {
      component = (
        <div className="profileContainer col-8">
          <Profile updatePage={this.props.updatePage}/>
        </div>
      );
    }

    return(
      <div className="wrapper">
        <div className="row align-items-start">
          <div className="col-2">
            <LeftNav url={this.props.userAvatar} userName={this.props.userName} updatePage={this.props.updatePage}/>
          </div>
          {component}
          {/* <div className="profileContainer">
            <Profile />
          </div>

          <div className="col-8">
            <FeedContainer />
          </div> */}
          <div className="col-2">
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

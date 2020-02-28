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

import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "../actions/userActions";
import * as roomActions from "../actions/roomActions";
import * as ticketActions from '../actions/ticketActions';
import Profile from '../components/Profile';
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import FeedContainer from "./FeedContainer";
import { bindActionCreators } from "redux";

const mapStateToProps = state => ({
  totalSnaps: state.tickets.totalSnaps,
  leaderBoard: state.tickets.leaderBoard,
  ticketsCount: state.tickets.ticketsCount,
  userAvatar: state.user.userAvatar,
  currPage: state.user.currPage,
  userName: state.user.userName,
  userId: state.user.userId,
  activeRoom: state.rooms.activeRoom,
  rooms: state.rooms.rooms,
  newRoom: state.rooms.newRoom,
  joinRoomName: state.rooms.joinRoomName
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...userActions, ...roomActions }, dispatch);

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserData().then(res => {
      this.props.getRooms(this.props.userId);
    });
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

    return (
      <div className="wrapper">
        <div className="row align-items-start">
          <div className="col-2">
            <LeftNav
              url={this.props.userAvatar}
              userName={this.props.userName}
              userId={this.props.userId}
              activeRoom={this.props.activeRoom}
              updatePage={this.props.updatePage}
              rooms={this.props.rooms}
              addRoom={this.props.addRoom}
              newRoom={this.props.newRoom}
              updateNewRoom={this.props.updateNewRoom}
              updateActiveRoom={this.props.updateActiveRoom}
              updateJoinRoomName={this.props.updateJoinRoomName}
              joinRoomName={this.props.joinRoomName}
              joinRoom={this.props.joinRoom}
            />

          </div>
          {component}
          {/* <div className="profileContainer">
            <Profile />
          </div>

          <div className="col-8">
            <FeedContainer />
          </div> */}
          <div className="col-2">
            <RightNav
              ticketsCount={this.props.ticketsCount}
              activeRoom={this.props.activeRoom}
              userId={this.props.userId}
              banUser={this.props.banUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);

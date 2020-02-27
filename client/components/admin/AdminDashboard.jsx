import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Menu from '../Menu';

import * as adminActions from '../../actions/adminActions.js';

const mapStateToProps = state => ({
  totalSnaps: state.tickets.totalSnaps,
  leaderBoard: state.tickets.leaderBoard,
  ticketsCount: state.tickets.ticketsCount,
  userAvatar: state.user.userAvatar,
  userName: state.user.userName,
  userId: state.user.userId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(adminActions, dispatch);

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('inside admin dash: ', this.props);
    const userInfo = (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{this.props.userId}</li>
          <li className="list-group-item">
            Hardcoded: user email goes here -- might not even need to exist
          </li>
          <li className="list-group-item">
            Hardcoded: organization we're a part of for right now
          </li>
          <li className="list-group-item">
            Hardcoded for rn: User role, ie admin or member of the org
          </li>
          <li className="list-group-item">
            <Link to="/profile/update" className="nav-link">
              Update profile
            </Link>
          </li>
        </ul>
      </div>
    );

    const visualData = (
      <div className="card mb-5">
        <h3 className="card-header">Ticket Visualization</h3>
        <ul className="list-group">
          <li className="list-group-item">Hardcoded: DATA GOES HURR</li>
        </ul>
      </div>
    );

    const mentor = (
      <div className="card">
        <h4 className="card-header">Mentors in Org</h4>
        <ul className="list-group">
          <li className="list-group-item">
            THIS SHOULD DYNAMICALLY RENDER A BUNCH OF MENTORS VIA LOOPING
            {/* the li itself need to be part of a function that create list items and then pushes them into an array */}
            {/* each li should contain a <Link /> to the individual mentors page */}
          </li>
        </ul>
      </div>
    );

    return (
      <>
        <Menu />
        <div className="row">
          <div className="col-3">{userInfo}</div>
          <div className="col-6">{visualData}</div>
          <div className="col-3">{mentor}</div>
          {/* PICK UP ON ADDING A CREATE CATEGORY THINGY HERE -- ITS A STRETCH BUT WE CAN AT LEAST PUT THE PLACEHOLDER JSX */}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);

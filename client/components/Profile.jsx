/**
 * ************************************
 *
 * @module  Profile 
 * @author
 * @date
 * @description  component that renders profile page with the user's information, including bio and feedbacks they've received
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ticketActions from '../actions/ticketActions';
// import { render } from 'node-sass';

const mapStateToProps = state => ({
  userId: state.user.userId,
  userName: state.user.userName,
  userBio: state.user.userBio,
  userAvatar: state.user.userAvatar
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

let feedbacks = [];

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile);
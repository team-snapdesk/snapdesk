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
import { Media } from 'react-bootstrap';
// import { render } from 'node-sass';

const mapStateToProps = state => ({
  userId: state.user.userId,
  userName: state.user.userName,
  userBio: state.user.userBio,
  userAvatar: state.user.userAvatar
});

const mapDispatchToProps = dispatch => bindActionCreators(ticketActions, dispatch);

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    //HARD CODED FEEDBACKS FOR NOW
    //need to be fetched from database
    const fbFetched = [
      {
        menteeName: 'Elie',
        feedback: 'You are genius',
        rating: 5,
      },
      {
        menteeName: 'Some_mentee',
        feedback: 'Ty for your help!!!',
        rating: 4,
      },
      {
        menteeName: 'Anonymous',
        feedback: 'THANKS',
        rating: 3,
      },
    ];
  
    const feedbacks = fbFetched.map((fb, idx) => {
      let stars = '';
      for (let i = 0; i < fb.rating; i++) {
        stars += '⭐'; //emoji size: 32 x 32
      }
      return (
        <div className="profile feedback" key={`feedback${idx}`}>
          <h6>From: {fb.menteeName}</h6>
          <span>{stars}</span>
          <span>{fb.feedback}</span>
        </div>
      );
    })

    const snapsReceived = (
      //some logic to get total of snaps received
      12
    )

    const snapsGiven = (
      //some logic to get total of snaps given
      10
    )
    
    return (
      <section className="profileSection">
        <h2>Profile</h2>

        <Media>
          <img
            src={this.props.userAvatar}
            width="64px"
            height="64px"
            className="d-inline-block align-top rounded-circle mx-auto"
            alt="Snap Desk Logo">
          </img>
          <Media.Body>
            <h6 className="mediaBody">{this.props.userName}</h6>
            <p className="mediaBody">
              {this.props.userBio}Sample bio that should be from github
            </p>
          </Media.Body>
        </Media>

        <div className="profile expertiseDisplay">
          <h5>Expertise</h5>
          <ul>
            <li>Hardcoded</li>
            <li>Javascript</li>
            <li>React-Redux</li>
          </ul>
        </div>

        <h5>Your Snaps</h5>
        <div className="profile snapsDisplay">
          {/* display snaps received + snaps given by the user 
            HARD CODED FOR NOW*/}
            <span>
              <h6>Snaps Received:</h6> {snapsReceived}
            </span>
            <span>
              <h6>Snaps Given:</h6> {snapsGiven}
            </span>
        </div>

        <h5>Feedbacks</h5>
        <div className="profile feedbackDisplay">
          {/* display feedbacks user received*/}
          {feedbacks}
        </div>

        <button className="btn btnProfileBack" onClick={() => this.props.updatePage('main')}>Back</button>
      </section>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
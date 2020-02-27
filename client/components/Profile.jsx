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
    ];
  
    const feedbacks = fbFetched.map((fb, idx) => {
      let stars = '';
      for (let i = 0; i < fb.rating; i++) {
        stars += '*';
      }
      return (
        <div className="profile feedback" key={`feedback${idx}`}>
          <span>From: {fb.menteeName}</span>
          <br/>
          <span>{stars}</span>
          <br/>
          <span>{fb.feedback}</span>
        </div>
      );
    })
    
    return (
      <section>
        <h2>{this.props.userName} Profile</h2>

        <article>
          {this.props.userBio}
        </article>

        <article>
          <h4>Expertise</h4>
          {this.props.userBio}
        </article>

        <div className="profile snapsDisplay">
          {/* display snaps received + snaps given by the user 
            HARD CODED FOR NOW*/}
            <span>Snaps Recieved: {7}</span>
            <span>Snaps Given: {10}</span>
        </div>

        <div className="profile feedbackDisplay overflow-auto">
          <h4>Feedbacks</h4>
          {/* display feedbacks user received 
            HARD CODED FOR NOW*/}
          {feedbacks}
        </div>
      </section>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
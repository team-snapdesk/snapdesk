/**
 * ************************************
 *
 * @module  BystanderTicketBox
 * @author
 * @date
 * @description  component that renders a single textbox for all Bystanders / Mentors
 *
 * ************************************
 */

import React, { Component } from 'react';

class BystanderTicketBox extends Component {
  constructor(props) {
    super(props);
  }
  render () {
  // if (this.props.activeTickets[i].status === 'active') {
  //   //ticket published by another user but has not been pick up yet
  //   //Accept button will be active but Cancel button will not and mentee is anonymous
  // } else if (this.props.userId !== this.props.activeTickets[i].mentorId && this.props.activeTickets[i].status === 'pending') {
  //   //this is when the ticket has been picked up by another mentor already
  //   //Both button will not be active and mentee is anonymous
  // } else if (this.props.userId === this.props.activeTickets[i].mentorId && this.props.activeTickets[i].status === 'pending') {
  //   //user is the mentor
  //   //Cancel button is active but Accept is not. mentee userName is active
  // }
  
    return (

      <div className="BystanderTicketBox">
      <h1>Hey from the BystanderTicketBox</h1>
      {/* <span>
      <button>ACCEPT</button>
      <button>CANCEL</button>
      </span> */}
      </div>
    )
  }
}

export default BystanderTicketBox;

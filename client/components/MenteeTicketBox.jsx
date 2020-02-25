/**
 * ************************************
 *
 * @module  MenteeTicketBox
 * @author
 * @date
 * @description  component that renders a single ticketbox for each mentee
 *
 * ************************************
 */

import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class MenteeTicketBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (this.props.activeTickets[i].status === 'active') {
    //   //has not been picked up yet
    //   //Delete button is active but Resolve is not
    // } this.props.activeTickets[i].status === 'pending') {
    //   //your ticket has been picked up.
    //   //Resolve is active but Delete is not
    // }
    return (
      <div className="MenteeTicketBox">
        <p>Request: {this.props.messageInput}</p>
        <p>Expected Snaps: {this.props.messageRating}</p>
        <span>
          <button
            onClick={() => this.props.resolveTicket(this.props.messageId)}
            type="button"
            className="btn btn-secondary"
          >
            Resolve
          </button>
          <button
            onClick={() => this.props.deleteTicket(this.props.messageId)}
            type="button"
            className="btn btn-success"
          >
            Delete
          </button>
        </span>
      </div>
    );
  }
}

export default MenteeTicketBox;

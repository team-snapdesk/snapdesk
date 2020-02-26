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
let buttons;
class MenteeTicketBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      deleteTicket,
      resolveTicket,
      userId,
      ticket: { 
        messageInput,
        messageRating,
        messageId,
        menteeId,
        menteeName,
        timestamp,
        status,
        mentorId
      }
    } = this.props;

    if (status === 'active') {
      buttons = (
        <span>
          <Button disabled={true} type="button" className="btn btn-secondary">Resolve</Button>
          <Button onClick={() => deleteTicket(messageId)} type="button" className="btn btn-success">Delete</Button>
        </span>
      )
    } else {
      buttons = (
        <span>
          <Button onClick={() => resolveTicket(messageId)} type="button" className="btn btn-secondary">Resolve</Button>
          <Button disabled={true} type="button" className="btn btn-success">Delete</Button>
        </span>
      )
    }
    return (
      <div className="MenteeTicketBox ticketbox">
        <p>Request: {messageInput}</p>
        <p>Expected Snaps: {messageRating}</p>
        {buttons}
      </div>
    )
  }
}

export default MenteeTicketBox;

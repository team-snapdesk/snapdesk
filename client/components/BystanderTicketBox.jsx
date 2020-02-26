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
import { Form, Button } from 'react-bootstrap';
let buttons;
class BystanderTicketBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      acceptTicket,
      cancelAccept,
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
      //ticket published by another user but has not been pick up yet
      //Accept button will be active but Cancel button will not and mentee is anonymous
      buttons = (
        <span>
          <Button onClick={() => acceptTicket(messageId)} type="button" className="btn btn-success">Accept</Button>
          <Button disabled={true} type="button" className="btn btn-secondary">Cancel</Button>
        </span>
      )
    } else if (userId !== mentorId && status === 'pending') {
      //this is when the ticket has been picked up by another mentor already
      //Both button will not be active and mentee is anonymous
      buttons = (
        <span>
          <Button disabled={true} type="button" className="btn btn-success">Accept</Button>
          <Button disabled={true} type="button" className="btn btn-secondary">Cancel</Button>
        </span>
      )
    } else if (userId === mentorId && status === 'pending') {
      //user is the mentor
      //Cancel button is active but Accept is not. mentee userName is active
      buttons = (
        <span>
          <Button disabled={true} type="button" className="btn btn-success">Accept</Button>
          <Button onClick={() => cancelAccept(messageId)} type="button" className="btn btn-warning">Cancel</Button>
        </span>
      )
    }

    return (

      <div className="BystanderTicketBox ticketbox">
        <p>Request: {messageInput}</p>
        <p>Expected Snaps: {messageRating}</p>
        {buttons}
      </div>
    )
  }
}

export default BystanderTicketBox;

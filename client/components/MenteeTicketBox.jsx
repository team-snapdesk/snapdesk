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
  render () {
    //if (this.props.activeTickets[i].status === 'active') {
      //   //has not been picked up yet
      //   //Delete button is active but Resolve is not
      // } this.props.activeTickets[i].status === 'pending') {
      //   //your ticket has been picked up. 
      //   //Resolve is active but Delete is not
      // }
      console.log(this.props.ticket)
    if (this.props.ticket.status === 'active') {
      buttons = (
        <span>
          <Button disabled={true} type="button" className="btn btn-secondary">Resolve</Button>
          <Button onClick={() => this.props.deleteTicket(this.props.ticket.messageId)} type="button" className="btn btn-success">Delete</Button>
        </span>
      )
    } else {
      buttons = (
        <span>
          <Button onClick={() => this.props.resolveTicket(this.props.ticket.messageId)}type="button" className="btn btn-secondary">Resolve</Button>
          <Button disabled={true} type="button" className="btn btn-success">Delete</Button>
        </span>
      )
    }
    return (
    <div className="MenteeTicketBox ticketbox">
      <p>Request: {this.props.messageInput}</p>
      <p>Expected Snaps: {this.props.messageRating}</p>
      {buttons}
    </div>
    )
  }
}

export default MenteeTicketBox;

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

import React from 'react';
import { Form, Button } from 'react-bootstrap';

const MenteeTicketBox = props => (
  <div className="MenteeTicketBox">
    <p>Request: {props.messageInput}</p>
    <p>Expected Stars: {props.messageRating}</p>
    <span>
    <button onClick={() => props.resolveTicket(props.messageId)}type="button" class="btn btn-success">Resolve</button>
    <button onClick={() => props.deleteTicket(props.messageId)} type="button" class="btn btn-warning">Delete</button>
    </span>
  </div>
);

export default MenteeTicketBox;

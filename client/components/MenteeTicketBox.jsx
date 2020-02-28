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
// import bootstrap
import Button from 'react-bootstrap/Button';



class MenteeTicketBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      deleteTicket,
      toggleModal,
      userName,
      ticket: { 
        messageInput,
        messageRating,
        messageId,
        menteeId,
        menteeName,
        timestamp,
        status,
        mentorId,
        topic
      },
    } = this.props;

    // generate buttons
    let buttons;
    if (status === 'active') {
      buttons = (
        <span>
          {/* <Button disabled={true} type="button" className="btn btn-secondary">Resolve</Button> */}
          <Button onClick={() => deleteTicket(messageId)} type="button" className="btn btn-success">Delete</Button>
        </span>
      )
    } else {
      buttons = (
        <span>
          <Button onClick={() => toggleModal({ messageRating, messageInput, messageId })} type="button" className="btn btn-secondary">Resolve</Button>
          {/* <Button disabled={true} type="button" className="btn btn-success">Delete</Button> */}
        </span>
      )
    }

    return (
      <div className="ticket-box">
        <p>By: {userName}</p>
        <hr />
        <p>Request: {messageInput}</p>
        <div className="flex-container snaps-topic-container">
          <div>
            Expected Snaps: {messageRating}
          </div>
          <div>
            {topic}
          </div>
        </div>
        {buttons}
      </div>
    )
  }
}

export default MenteeTicketBox;

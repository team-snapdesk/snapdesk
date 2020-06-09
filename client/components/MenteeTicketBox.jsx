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
import Snap from './Snap';



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
        <div className="flex-container button-generic">
          <Button variant="link" className="button-subtle delete" onClick={() => deleteTicket(messageId)} type="button">
            {/* Icon by Bytesize https://github.com/danklammer/bytesize-icons */}
            <svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
            </svg>
            <span>Delete</span>
          </Button>
        </div>
      )
    } else {
      buttons = (
        <div className="flex-container button-generic">
          <Button variant="link" className="button-subtle" onClick={() => toggleModal({ messageRating, messageInput, messageId })} type="button">
            {/* Icon by Bytesize https://github.com/danklammer/bytesize-icons */}
            <svg id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M2 20 L12 28 30 4" />
            </svg>
            <span>Resolve</span>
          </Button>
        </div>
      )
    }

    const snapRating = [];
    for (let i = 0; i < messageRating; i++) {
      snapRating.push(
        <div>
          <svg className="fill" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 108 162">
            <path d="M51.5,43.8V10.5C51.5,9.7,52.2,9,53,9s1.5,0.7,1.5,1.5v33.3c0,0.8-0.7,1.5-1.5,1.5
            C52.2,45.2,51.5,44.6,51.5,43.8z"/>
            <path d="M59.5,47.3c0.5,0,0.9-0.2,1.2-0.6l16-20.9c0.2-0.3,0.3-0.7,0.3-1.1c-0.1-0.4-0.2-0.7-0.6-1
              c-0.3-0.2-0.6-0.3-0.9-0.3c-0.5,0-0.9,0.2-1.2,0.6l-16,21c-0.5,0.6-0.4,1.6,0.3,2C58.8,47.2,59.2,47.3,59.5,47.3z"/>
            <path d="M45.3,46.8c0.3,0.4,0.7,0.6,1.2,0.6c0.3,0,0.6-0.1,0.9-0.3c0.3-0.2,0.5-0.6,0.6-1s-0.1-0.8-0.3-1.1l-16-20.9
              c-0.3-0.4-0.7-0.6-1.2-0.6c-0.3,0-0.6,0.1-0.9,0.3c-0.6,0.5-0.8,1.4-0.3,2L45.3,46.8z"/>
            <path d="M92.4,109.5c1.2,4.1-0.2,8.7-3.7,11.6c-11.8,9.7-22.3,16.9-38,22.3l-9.8,8.8c-0.5,0.5-1.2,0.8-2,0.8l0,0v-0.8
              l-0.1,0.7h-0.2c-0.7-0.1-1.4-0.4-1.8-0.9L8.9,121c-1-1.1-1-2.9,0.1-4l8.5-8.7c-2.2-8.7,0.2-17.4,2.3-25.1c2.1-7.6,3.9-14.2,1-19.1
              c-2-3.3-2.6-6.2-1.7-8.7c0.8-2.3,2.7-3.7,4.3-4.2c1.1-0.4,2.3-0.6,3.5-0.6c6.5,0,12.4,6.1,13.7,14.3c0.6,3.8,1.4,12.9,1.8,18
              c8.4-7.9,30.7-28.7,37.1-34.2c3.7-3.2,8-6.5,13-6.5c0.4,0,0.7,0,1.1,0.1c2.5,0.2,4.6,1.6,5.6,3.6c3.1,6.5-4.5,14.1-8.2,17.7
              c-3.1,3.1-8.7,8.4-11.7,11.3C82,75.8,84,78,84.7,81c0.5,2.4,0.1,5.2-1.2,7.7c2.9,0.8,5,2.9,5.8,5.8c0.7,2.8,0.1,6-1.9,9
              C89.7,104.6,91.6,106.7,92.4,109.5z"/>
          </svg>
        </div>
      );
    };

    return (
      <div className="ticket-box mentee">
        <div className="request">
          <div className="flex-container name-timestamp-container">
            <div>
              <p className="fade">request by {userName.toLowerCase()}</p>
            </div>
            <div>
              <p className="fade">{timestamp}</p>
            </div>
          </div>
          <p>{messageInput}</p>
        </div>
        <div className="flex-container snaps-topic-container">
          <div className="flex-container">
            {snapRating}
          </div>
          <div className="topic">
            {topic}
          </div>
        </div>
        <hr />
        {buttons}
      </div>
    )
  }
}

export default MenteeTicketBox;

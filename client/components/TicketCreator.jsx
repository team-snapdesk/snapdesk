/**
 * ************************************
 * @module  TicketCreator
 * @author
 * @date
 * @description presentation component that creates a Mentee post with message, topics, and expected stars
 *
 *
 * ************************************
 */

import React, { useState } from 'react';

// import components here
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Snap from './Snap';

const TicketCreator = ({
  userId,
  messageInput,
  messageRating,
  activeTickets,
  updateMessage,
  ticketsCount,
  postTicket,
  updateRating,
  topic
}) => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity()!== false) {
      postTicket();
      setValidated(false);
    }
  }

  const handleFocus = event => {
    if (validated === true) setValidated(false);
  }

  const snapButtons = [];
  for (let i = 1; i <= 5; i++) {
    let idStyle;
    if (i <= messageRating) idStyle = 'fill';
    else idStyle = 'empty';
    snapButtons.push(<Snap key={'snap' + i} index={i} idStyle={idStyle} updateRating={updateRating} />);
  }

  return (
    <div className="ticket-creator-display">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <textarea
          required
          onFocus={handleFocus}
          rows="3" 
          value={messageInput}
          onChange={updateMessage}
          placeholder="What do you need help with?"
        />
        <div className="flex-container snap-buttons">
          {snapButtons}
        </div>
        <hr/>
        <div className="flex-container post-button">
          <Button variant="link" className="button-subtle" type="submit">
            {/* Icon by Bytesize https://github.com/danklammer/bytesize-icons */}
            <svg id="i-send" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="2o" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M2 16 L30 2 16 30 12 20 Z M30 2 L12 20" />
            </svg>
            <span>Post</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}


export default TicketCreator;

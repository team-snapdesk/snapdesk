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
import { chooseTopic } from '../actions/ticketActions';

const TicketCreator = ({
  userId,
  topic,
  messageInput,
  messageRating,
  activeTickets,
  updateMessage,
  ticketsCount,
  postTicket,
  updateRating,
  chooseTopic
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
        <Form.Control
          required
          onFocus={handleFocus}
          rows="3" 
          as='textarea'
          value={messageInput}
          onChange={updateMessage}
          placeholder="What do you need help with?"
        />
        <div className="flex-container snaps-topic-container">
          <div className="flex-container snap-buttons">
            {snapButtons}
          </div>
          <Form.Control value={topic} className="topic-selector" required as='select' onChange={chooseTopic}>
            <option value='select' disabled>select topic...</option>
            <option value='Javascript' >Javascript</option>
            <option value='Data Structures'>Data Structures</option>
            <option value='GIT/Github'>GIT/Github</option>
            <option value='Algorithms'>Algorithms</option>
            <option value='AJAX'>AJAX</option>
            <option value='React'>React</option>
            <option value='Redux'>Redux</option>
            <option value='HTML/CSS'>HTML/CSS</option>
            <option value='Node'>Node</option>
            <option value='Express'>Express</option>
            <option value='Databases'>Databases</option>
            <option value='Authentication'>Authentication</option>
            <option value='Other'>Other</option>
          </Form.Control>
        </div>
        <hr/>
        <div className="flex-container button-generic">
          <Button variant="link" className="button-subtle" type="submit">
            {/* Icon by Bytesize https://github.com/danklammer/bytesize-icons */}
            <svg id="i-send" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
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

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

import React from 'react';
import { Form, Button } from 'react-bootstrap';
// import components here
import Snap from './Snap';

const TicketCreator = ({
  userId,
  messageInput,
  messageRating,
  activeTickets,
  updateMessage,
  ticketsCount,
  postTicket,
  updateRating
}) => {

  const snapButtons = [];
  for (let i = 1; i <= 5; i++) {
    let idStyle;
    if (i <= messageRating) idStyle = 'fill';
    else idStyle = 'empty';
    snapButtons.push(<Snap key={'snap' + i} index={i} idStyle={idStyle} updateRating={updateRating} />);
  }

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          postTicket();
        }}
      >
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          onChange={updateMessage}
        >
          <Form.Label>What do you need help with?</Form.Label>
          <Form.Control as="textarea" rows="3" value={messageInput} />
        </Form.Group>
        <div className="flex-container">
          {snapButtons}
        </div>
        <Button className="btn btn-secondary btn-md" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
}


export default TicketCreator;

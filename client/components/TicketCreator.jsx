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
        {/* <Form.Group onChange={updateRating}>
          <Form.Check
            inline
            label="1"
            type="radio"
            id="snap-1"
            name="snap-form"
            value={1}
          />
          <Form.Check
            inline
            label="2"
            type="radio"
            id="snap-2"
            name="snap-form"
            value={2}
          />
          <Form.Check
            inline
            label="3"
            type="radio"
            id="snap-3"
            name="snap-form"
            value={3}
          />
          <Form.Check
            inline
            label="4"
            type="radio"
            id="snap-4"
            name="snap-form"
            value={4}
          />
          <Form.Check
            inline
            label="5"
            type="radio"
            id="snap-5"
            name="snap-form"
            value={5}
          />
        </Form.Group> */}
        <Button className="btn btn-secondary btn-md" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
}


export default TicketCreator;

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
import { chooseTopic } from '../actions/ticketActions';

const TicketCreator = ({
  userId,
  messageInput,
  messageRating,
  activeTickets,
  updateMessage,
  ticketsCount,
  postTicket,
  updateRating,
  chooseTopic
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
        >
          <Form.Label>What do you need help with?</Form.Label>          
            <Form.Group controldId="formGridState">
              <Form.Label>Choose topic</Form.Label>
              <Form.Control as='select' onChange={chooseTopic}>
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
              </Form.Control>
            </Form.Group>
          <Form.Control as="textarea" rows="3" value={messageInput} onChange={updateMessage}/>
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

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
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

let buttons;
class MenteeTicketBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      deleteTicket,
      resolveTicket,
      toggleModal,
      updateFeedback,
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
      },
      resolveModal: {
        show,
        feedback
      }
    } = this.props;

    if (status === 'active') {
      buttons = (
        <span>
          <Button disabled={true} type="button" className="btn btn-secondary">Resolve</Button>
          <Button onClick={() => deleteTicket(messageId)} type="button" className="btn btn-success">Delete</Button>
        </span>
      )
    } else {
      buttons = (
        <span>
          <Button onClick={toggleModal} type="button" className="btn btn-secondary">Resolve</Button>
          <Button disabled={true} type="button" className="btn btn-success">Delete</Button>
        </span>
      )
    }
    return (
      <div className="MenteeTicketBox ticketbox">
        <p>Request: {messageInput}</p>
        <p>Expected Snaps: {messageRating}</p>
        {buttons}

        <Modal show={show} onHide={toggleModal} >
          <Modal.Header closeButton>
            <Modal.Title>Resolving</Modal.Title>
          </Modal.Header>
          <Modal.Body>Request: {messageInput}</Modal.Body>
          <Form.Control 
            as="textarea"
            rows="3"
            placeholder="Feedback"
            value={feedback}
            onChange={(e) => updateFeedback(e)}
          />
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={() => resolveTicket(ticketId)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
}

export default MenteeTicketBox;

import React from 'react';
import Modal from 'react-bootstrap/Modal';

// import components
import Snap from './Snap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ResolveModal = ({
  toggleModal,
  updateFinalRating,
  updateFeedback,
  resolveTicket,
  resolveModal: {
    show,
    messageInput,
    messageId,
    feedback,
    finalSnaps
  }
}) => {

  // generate snap buttons
  const snapButtons = [];
  for (let i = 1; i <= 5; i++) {
    let idStyle;
    if (i <= finalSnaps) idStyle = 'fill';
    else idStyle = 'empty';
    snapButtons.push(<Snap key={'snap' + i} index={i} idStyle={idStyle} updateRating={updateFinalRating} />);
  }
  
  return (
    <Modal show={show} onHide={toggleModal} >
      <Modal.Header closeButton onClick={toggleModal} >
        <Modal.Title>Resolving</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Request: {messageInput}
      </Modal.Body>
      <Form.Control 
        as="textarea"
        rows="3"
        placeholder="Feedback"
        value={feedback}
        onChange={(e) => updateFeedback(e)}
      />
      <div className="flex-container">
        {snapButtons}
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => resolveTicket(messageId)}>
          Resolve
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ResolveModal;

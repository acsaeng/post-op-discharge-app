import React from 'react'
import { Modal, Button } from 'react-bootstrap';

function AppoinmentModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Date & Time: {props.data.date}</h5>
        <h5>Location: {props.data.location}</h5>
        <h5>Phone Number: {props.data.phone_num}</h5>
        <h5>Comments: </h5>
        <p>
          {props.data.comments}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppoinmentModal;
import React from 'react'
import {Modal , Button} from 'react-bootstrap';

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
        <h5>Date: {props.data.date}</h5>
        <h5>Time: {props.data.time}</h5>
        <h5>Location: {props.data.location}</h5>
        <h5>Comments: </h5>
        <p>
          {props.data.comment}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppoinmentModal;
import { Card, Button } from "react-bootstrap";
import AppoinmentModal from "./AppoinmentModal";
import { useState } from "react";

function AppointmentCard(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{props.date}</Card.Header>
        <Card.Body>
          <Card.Title>Appointment: {props.title}</Card.Title>
          <Card.Text>Time: {props.time}</Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Details
          </Button>
        </Card.Body>
      </Card>

      <AppoinmentModal show={modalShow} onHide={() => setModalShow(false)} data={{...props}} />
    </>
  );
}

export default AppointmentCard;

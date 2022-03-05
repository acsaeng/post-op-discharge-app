import { Card, Button } from "react-bootstrap";

const MonitoringCard = props => {

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{props.date}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Entry Date: {props.time}</Card.Text>
          <Card.Img>{props.image}</Card.Img>
          <Card.Text>Description: {props.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MonitoringCard;

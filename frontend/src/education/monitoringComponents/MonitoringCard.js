import { Card, Button } from "react-bootstrap";

const MonitoringCard = props => {

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Card.Title>{props.date}</Card.Title>
          <Card.Img>{props.image}</Card.Img>
          <Card.Text>Comment: {props.comment}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MonitoringCard;

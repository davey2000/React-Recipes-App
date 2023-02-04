import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import exportedImages from "../../constants/Images";


function PopularCardd({ id, title, image }) {
  return (
   
    <Card className='cust'>
    <Card.Img  variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Vegetarian / Vegan</ListGroup.Item>
        <ListGroup.Item>Delicous and Healthy</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
   
  );
}

export default PopularCardd;
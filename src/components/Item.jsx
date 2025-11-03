import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <Card style={{ width: "20rem", height: "35rem" }}>
      <Card.Img className="card-img" variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>${prod.price},00</Card.Text>
        <Card.Text>{prod.description}</Card.Text>
        <Link className="btn btn-info" to={`/item/${prod.id}`}>
          Ver Más
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;

import React from "react";
import { Card, Placeholder, Image, Col } from "react-bootstrap";
import "./PlaceHolderCard.css";

const PlaceHolderCard = () => (
  <Col md={4} xs={12} className="card-container">
    <Card className="card">
      <Card.Header>
        <Placeholder className="card__header" animation="glow">
          <Placeholder xs={4} />
          <Placeholder.Button as={Card.Button} xs={4} />
        </Placeholder>
      </Card.Header>
      <Card.Body className="card__body">
        <Image className="card__img" />
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={2} size="lg" /> <Placeholder xs={5} size="sm" />
        </Placeholder>
      </Card.Body>
    </Card>
  </Col>
);

export default PlaceHolderCard;

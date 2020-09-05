import React from "react";
import { Card } from 'react-bootstrap';


function CardHome(props) {
  return (
    <div className="cardsHome">
      <Card style={{ width: '12rem' }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.Subtitle}</Card.Subtitle>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
    </Card.Text> */}
          <Card.Link href="./AutoIns">{props.link}</Card.Link>
          <Card.Link href="#">{props.link1}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardHome;
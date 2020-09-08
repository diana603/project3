import React from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function CardHome(props) {
  const { link } = props
  return (
    <Link to={link}>
      <div className="cardsHome">
        <Card style={{ width: '12rem' }}>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.Subtitle}</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </Link>
  )
}

export default CardHome;
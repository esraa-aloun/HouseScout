import React from 'react'
import {Container, Form, Button, Card} from "react-bootstrap"

export default function Property(props) {

  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {props.type}
          {props.location}
        </Card.Text>
        <Button variant="primary" onClick={()=>{props.addIntrestedProperty(props._id,props.owner)}}>I am Intrested</Button>
        <Button variant="primary" onClick={()=>{props.addToFavourite(props._id)}}>Add to Favourite</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

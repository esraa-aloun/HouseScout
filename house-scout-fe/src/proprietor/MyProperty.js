import React from 'react'
import {Container, Form, Button, Card} from "react-bootstrap"


export default function MyProperty(props) {

    

  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {props.type}
        </Card.Text>
      {/* <Button variant="primary" onClick={()=>{props.addIntrestedProperty(props._id)}}>I am Intrested</Button>  */}
         <Button variant="danger" onClick={()=>{props.deleteProperty(props._id)}} >Delete</Button> 
      </Card.Body>
    </Card>
    </div>
  )
}







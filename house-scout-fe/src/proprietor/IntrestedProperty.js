import React from 'react'
import {Container, Form, Button, Card} from "react-bootstrap"
import '../App.css'

export default function IntrestedProperty(props) {
  let imagePath = "/images/" + props.pImg
  return (
    <Card style={{ width: '18rem' }} className='jehan'>
    <img variant="top" src={imagePath} />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>

        Client Name: {props.client_name} <br/>
        Client Phone Number: {props.client_phoneNumber}<br/>
        Intrested into this property
     
     

 
     
      </Card.Text>
      
      {/* <Button variant="success" className='btn1' onClick={()=>{props.addIntrestedProperty(props._id,props.owner)}}style={{ width: '100%' }}>I am Intrested</Button> */}
      <br/>
      {/* <Button variant="dark" onClick={()=>{props.addToFavourite(props._id)}} style={{ width: '100%' }}>Add to Favourite List</Button> */}
    </Card.Body>
  </Card> 
  )
}

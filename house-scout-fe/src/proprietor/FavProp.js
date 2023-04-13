import React from 'react'
import {Container, Form, Button, Card} from "react-bootstrap"



export default function FavProp(props) {
  let imagePath = "/images/" + props.img

  return (
    <>
     
     
     <Card style={{ width: '18rem' }} className='jehan'>
      <img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{props.price} BD</Card.Title>
        <Card.Text>
        {/* <FontAwesomeIcon icon="fa-solid fa-toilet" /> */}
        Location: {props.location}<br/>
        Room: {props.room}<br/>
        Master: {props.master}<br/>        
        Bathroom: {props.bathRoom} <br/>
        Kitchen: {props.kitchen}<br/>
        Floor: {props.floor}<br/>
        {props.offerType}<br/>
        {/* {props.furnished} */}

   
         
        </Card.Text>
        
        <Button variant="success" className='btn1' onClick={()=>{props.addIntrestedProperty(props._id,props.owner)}}style={{ width: '100%' }}>I am Intrested</Button>
        <br/>
        <Button variant="danger" onClick={()=>{}} style={{ width: '100%' }}>Remove</Button>
      </Card.Body>
    </Card> 
              {/* <Card.Title>{props.location}</Card.Title> */}
             





    </>
  )
}

import React from 'react'
import {Container, Form, Button, Card} from "react-bootstrap"

import '../App.css'




export default function Property(props) {

  let imagePath = "/images/" + props.img

  return (
    <>

        <Card style={{ width: '18rem' }} className='jehan'>
      <img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{props.price} BD</Card.Title>
        <Card.Text>
        {/* <FontAwesomeIcon icon="fa-solid fa-toilet" /> */}
        Room: {props.room}<br/>
        Master: {props.master}<br/>        
        Bathroom: {props.bathRoom} <br/>
        Kitchen: {props.kitchen}<br/>
        Floor: {props.floor}<br/>
        {props.offerType}<br/>
        {props.furnished}

   
          {/* {props.type}
          {props.location} */}
        </Card.Text>
        
        <Button variant="success" className='btn1' onClick={()=>{props.addIntrestedProperty(props._id,props.owner)}}style={{ width: '100%' }}>I am Intrested</Button>
        <br/>
        <Button variant="dark" onClick={()=>{props.addToFavourite(props._id)}} style={{ width: '100%' }}>Add to Favourite List</Button>
      </Card.Body>
    </Card> 

   




    </>
  )
}

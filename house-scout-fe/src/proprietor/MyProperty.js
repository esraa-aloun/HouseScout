import React from 'react'
import {Container, Form, Button, Card} from "react-bootstrap"


export default function MyProperty(props) {

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
        {props.furnished}

   
          {/* {props.type}
          {props.location} */}
        </Card.Text>
        
        <Button variant="dark" className='btn1' onClick={()=>{props.editView(props._id)}}style={{ width: '100%' }} >Edit</Button>
        <br/>
        <Button variant="danger" onClick={()=>{props.deleteProperty(props._id)}}style={{ width: '100%' }} >Delete</Button> 
      </Card.Body>
    </Card> 

   




    </>

    

  // return (
  //   <div>
  //       <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title>Card Title</Card.Title>
  //       <Card.Text>
  //         {props.type}
  //         {props.location}
  //       </Card.Text>
  //     {/* <Button variant="primary" onClick={()=>{props.addIntrestedProperty(props._id)}}>I am Intrested</Button>  */}
        
         
  //        <Button variant="danger" onClick={()=>{props.deleteProperty(props._id)}} >Delete</Button> 
  //     </Card.Body>
  //   </Card>
  //   </div>
  )
}







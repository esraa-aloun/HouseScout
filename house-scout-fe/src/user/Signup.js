import React,{useState} from 'react'
import {Container, Form, Button} from "react-bootstrap"
import '../App.css'


export default function Signup(props) {
 
    const [newUser, setNewUser]= useState({});

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user)
    }

     
    const registerHandler =() =>{
        props.register(newUser)
    }



  return (
    <div className='signup'>
        {/* <h1>signup</h1> */}
        <br/>
        <Container>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name='firstName' onChange={changeHandler}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>last Name</Form.Label>
                <Form.Control name='lastName' onChange={changeHandler}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name='phoneNumber' onChange={changeHandler}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name='emailAddress' onChange={changeHandler}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' onChange={changeHandler}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" name="userRole" onChange={changeHandler}>
                    <option value="">Choose an option </option>
                    <option value="Client" defaultValue >Looking for a property</option>
                    <option value="Proprietor">Offering a property</option>                    
                </Form.Control>
            </Form.Group>

            <div className='midbtn'>
            <Button variant='info' onClick={registerHandler} size="lg"style={{ width: '100%' }}>Register</Button>
            </div>
        </Container>
    </div>
  )
}


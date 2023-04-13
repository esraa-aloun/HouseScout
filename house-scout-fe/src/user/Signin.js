import React,{useState} from 'react'
import {Container, Form, Button} from "react-bootstrap"


export default function Signin(props) {
 
    const [newUser, setNewUser]= useState({});

    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        setNewUser(user)
        console.log(user)
    }

     
    const loginHandler =() =>{
        props.login(newUser)
    }



  return (
    <div className='signup'>
        {/* <h1>Sign in</h1> */}
        <Container>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name='emailAddress' onChange={changeHandler}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password'name='password' onChange={changeHandler}/>                
            </Form.Group>
            <div className='midbtn'>
            <Button variant='info' onClick={loginHandler} size="lg"style={{ width: '100%' }}>login</Button>
            </div>
        </Container>
    </div>
  )
}


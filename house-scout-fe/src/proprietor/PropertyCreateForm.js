import React,{useState,useEffect} from 'react'
import {Container, Form, Button} from "react-bootstrap"
import Axios from 'axios'
import jwt_decode from 'jwt-decode'


export default function PropertyCreateForm(props) {

 const [newProperty, setNewProperty] = useState({})
 const [user, setUser] = useState({})
 const [isAuth, setIsAuth] = useState(false)



//user.user._id
 useEffect(()=>{
    let token = localStorage.getItem("token")
    if(token != null){
      let user = jwt_decode(token)
        console.log(user)
      if(user){
        setIsAuth(true)
        setUser(user)
        newProperty["owner"] = user.user.id
        setNewProperty(newProperty)
      }
      else if (!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }
  },[])

 const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const property = {...newProperty}
    property[attributeToChange] = newValue
    console.log(property)
    setNewProperty(property)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addProperty(newProperty);
  }

  
  const addProperty = (property) => {
    Axios.post("property/add", property,
    {
        headers:{
            "Authorization":"Bearer " + localStorage.getItem("token")  
        }
    })
    .then(res => {
        console.log("property Added Successfully")
        // loadAuthorsList();
    })
    .catch(err => {
        console.log("Error Adding property")
        console.log(err)
    })
}

    

  return (
    <div className='signup'>
        {/* <h1>PropertyCreateForm</h1> */}
        <br/>
        <Container>

            
            <Form.Group>
                <Form.Label>Property Type</Form.Label>
                <Form.Control as="select" name="type" onChange={handleChange}>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Studio">Studio</option>                    
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control name='location' onChange={handleChange}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control name='price' onChange={handleChange}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Floor</Form.Label>
                <Form.Control name='floor' onChange={handleChange}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Room</Form.Label>
                <Form.Control name='room' onChange={handleChange}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Master Room</Form.Label>
                <Form.Control name='master' onChange={handleChange}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Kitchen</Form.Label>
                <Form.Control name='kitchen' onChange={handleChange}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Bathroom</Form.Label>
                <Form.Control name='bathRoom' onChange={handleChange}/>                
            </Form.Group>

                    

            <Form.Group>
                 <Form.Label>Offer</Form.Label> 
                <div className='radiobtn'>
                    <div className='space'>
                    <Form.Check type="radio" label="For sale" name="offerType"
                    value="For Sale"
                    onChange={handleChange}
                    />
                    </div>
                    <Form.Check type="radio" label="For Rent" name="offerType"
                    value="For Rent"
                    onChange={handleChange}
                    />                
                </div>
            </Form.Group>

            
            <Form.Group>
                <Form.Label>Furnished</Form.Label>
                <div className='radiobtn'>
                    <div className='space'>
                    <Form.Check type="radio" label="Yes" name="furnished"
                    value="Furnished"
                    onChange={handleChange}
                    />
                    </div>
                    <Form.Check type="radio" label="No" name="furnished"
                    value="Unfurnished"
                    onChange={handleChange}
                    />                
                </div>
            </Form.Group>

            {/* <Form.Group>
            <Form.Control type="hidden" name="owner" value={ user.user ? user.user.id : null} />
            </Form.Group> */}
            <input type="hidden" name="owner" value={ user.user ? user.user.id : null}/>
            <div className='midbtn'>
            <Button variant='info' onClick={handleSubmit} size="lg"style={{ width: '100%' }}>Add Property</Button> 
            </div>

        </Container>
    </div>
  )
}

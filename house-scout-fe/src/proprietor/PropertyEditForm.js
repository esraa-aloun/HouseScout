import React,{useState,useEffect} from 'react'
import {Container, Form, Button} from "react-bootstrap"


export default function PropertyEditForm(props) {

    const [property, setProperty] = useState(props.property)


    const handleChange = (event) => {
      const attributeToChange = event.target.name
      const newValue = event.target.value
  
      const updatedProperty = {...property}
      updatedProperty[attributeToChange] = newValue
      console.log(updatedProperty)
      setProperty(updatedProperty)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.editProperty(property);
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
                <Form.Control name='location' onChange={handleChange} value={property.location}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control name='price' onChange={handleChange} value={property.price}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Floor</Form.Label>
                <Form.Control name='floor' onChange={handleChange}value={property.floor}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Room</Form.Label>
                <Form.Control name='room' onChange={handleChange}value={property.room}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Master Room</Form.Label>
                <Form.Control name='master' onChange={handleChange} value={property.master}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Kitchen</Form.Label>
                <Form.Control name='kitchen' onChange={handleChange} value={property.kitchen}/>                
            </Form.Group>

            <Form.Group>
                <Form.Label>Bathroom</Form.Label>
                <Form.Control name='bathRoom' onChange={handleChange} value={property.bathRoom}/>                
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
            <input type="hidden" name="owner" value={property.owner}/>
            <div className='midbtn'>
            <Button variant='info' onClick={handleSubmit} size="lg"style={{ width: '100%' }}>Save Changes</Button> 
            </div>

        </Container>

    </div>
  )
}

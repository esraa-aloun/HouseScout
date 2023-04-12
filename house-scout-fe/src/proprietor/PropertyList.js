import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Property from './Property';

export default function PropertyList(props) {


    const [properties, setProperties] = useState([]);


    useEffect(() => {
      
    console.log(props)
    if(props.view === 'houses'){
       displayHouses()
    }
    else if (props.view === 'apartments'){
      displayApartments()
    }
    else if (props.view === 'studios'){
      displayStudios()
    }

    }, [])


    const addIntrestedProperty = (id) =>{

      // Call API with Property id and loggedin user id
      
    }
    
       

    const displayHouses = () =>{
        Axios.get("property/houses")
        .then((response) => {
          console.log(response)
          setProperties(response.data.properties)
        })
        .catch((err) => {
          console.log("Error Retreiving Properties")
          console.log(err)
        })
    }
    
    const displayApartments = () =>{
        Axios.get("property/apartments")
        .then((response) => {
          console.log(response)
          setProperties(response.data.properties)
        })
        .catch((err) => {
          console.log("Error Retreiving Properties")
          console.log(err)
        })
    }
    const displayStudios = () =>{
        Axios.get("property/studios")
        .then((response) => {
          console.log(response)
          setProperties(response.data.properties)
        })
        .catch((err) => {
          console.log("Error Retreiving Properties")
          console.log(err)
        })
    }

  const allPropertise = properties.map((property, index) => (
    <tr key={index}>
     <Property {...property} />
    </tr>

  ))


  return (
    <div>


    {allPropertise}

    </div>
  )
}

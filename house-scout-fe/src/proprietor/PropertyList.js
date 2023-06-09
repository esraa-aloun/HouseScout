import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import Property from './Property';
import jwt_decode from 'jwt-decode'
import '../App.css'


export default function PropertyList(props) {


    const [properties, setProperties] = useState([]);
    const [user, setUser] = useState({})
    const [isAuth, setIsAuth] = useState(false) 

    // let client_id = ""

    useEffect(() => {
      let token = localStorage.getItem("token")
      if(token != null){
        let user = jwt_decode(token)
          console.log(user)
        if(user){
          setIsAuth(true)
          setUser(user)

          // if(user.user){
          // client_id = user.user.id
          // }
        
        }
        else if (!user){
          localStorage.removeItem("token")
          setIsAuth(false)
        }
      }
      
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


    const addIntrestedProperty = (pid,ownerID,pimg) => {
    console.log('here',pid, "client_id", user.user.id)
    //the name of the variable must be same as the var name in Model
    
    const data = {property_id:pid, client_id:user.user.id, owner_id:ownerID, client_name: user.user.name, client_phoneNumber:user.user.phone,pImg:pimg}

      Axios.post("property/addIntrestedProperty", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });     
      
    }

    const addToFavourite = (pid) => {
      console.log('pid',pid)
      const data ={property_id:pid, client_id:user.user.id}

      Axios.post("property/addToFavourite", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });  

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
    <div key={index} >
     <Property {...property} addIntrestedProperty={addIntrestedProperty} addToFavourite={addToFavourite}/>
    </div>

  ))


  return (
    <div className='grid'>


    {allPropertise}

    </div>
  )
}

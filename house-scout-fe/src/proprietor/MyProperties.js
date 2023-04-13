import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import MyProperty from './MyProperty';
import jwt_decode from 'jwt-decode'
import PropertyEditForm from './PropertyEditForm';


export default function MyProperties() {

  const [myProperties, setMyProperties] = useState([]);
  const [user, setUser] = useState({})
  const [isAuth, setIsAuth] = useState(false)
  const [currentProperty, setCurrentProperty] = useState("");
  const [isEdit, setIsEdit]= useState(false);



  useEffect(() => {

    let token = localStorage.getItem("token")
    if(token != null){
      let user = jwt_decode(token)
        console.log(user)
      if(user){
        setIsAuth(true)
        setUser(user)
        displayMyProperties(user.user.id)
        
      }
      else if (!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }
    }, [])

  const displayMyProperties = (id) =>{
    Axios.get(`property/myPropertise?id=${id}`)
    .then((response) => {
      console.log(response)
      setMyProperties(response.data.myProperties)
    })
    .catch((err) => {
      console.log("Error Retreiving Properties")
      console.log(err)
    })
}

const deleteProperty = (id) => {
  Axios.delete(`property/delete?id=${id}`,
  {
      headers:{
          "Authorization":"Bearer " + localStorage.getItem("token")  
      }
  })
  .then(res =>{
      console.log('property deleted Successfuly')
      console.log(res)
      if(user.user){
        displayMyProperties(user.user.id)}
         })
  .catch(err =>
      {
          console.log('Error in deleting')
          console.log(err)
      })
}

const editView = (id) =>{ 
  Axios.get(`proprety/edit?id=${id}`)
  .then(res => {
      console.log(res.data.property)
      let property = res.data.property
      console.log('loaded property Information')
      setIsEdit(true)
      setCurrentProperty(property)
  })
  .catch(err =>
      {
          console.log('Error')
          console.log(err)
      })
}

const editProperty = (property) => {
  Axios.put('proprety/update', property,
  {
      headers:{
          "Authorization":"Bearer " + localStorage.getItem("token")  
      }
  })
  .then(res =>{
      console.log('property Updated Successfuly')
      console.log(res)
      // loadAuthorsList()
  })
  .catch(err =>
      {
          console.log('Error')
          console.log(err)
      })
}

const allPropertise = myProperties.map((property, index) => (
<div key={index}>
 
 <MyProperty {...property} deleteProperty={deleteProperty} editView={editView}/>
</div>

))

  return (
    <div className='grid'>
      {allPropertise}
      {(!isEdit) ? 
        ""
        :
        <PropertyEditForm key={currentProperty._id} property={currentProperty} editProperty={editProperty}/>
        }
    </div>
  )
}


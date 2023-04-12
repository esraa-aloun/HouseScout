import React,{useState,useEffect} from 'react'
import IntrestedProperty from './IntrestedProperty'
import  Axios from 'axios'
import jwt_decode from 'jwt-decode'

export default function IntrestedProperties(props) {

    const [intProperties, setIntProperties] = useState([]);
    const [user, setUser] = useState({})
    const [isAuth, setIsAuth] = useState(false)



    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token != null){
          let user = jwt_decode(token)
            console.log(user)
          if(user){
            setIsAuth(true)
            setUser(user)
           
          }
          else if (!user){
            localStorage.removeItem("token")
            setIsAuth(false)
          }
        }

        
        // const id = user.user.id
        displayIntrestedProperties(user.user.id)
    
        }, [])


    const displayIntrestedProperties = (id) =>{
        Axios.get(`property/IntrestedProperty?id=${id}`)
        .then((response) => {
          console.log(response)
          setIntProperties(response.data.intProperties)
        })
        .catch((err) => {
          console.log("Error Retreiving Properties")
          console.log(err)
        })
    }

    const allPropertise = intProperties.map((intproperty, index) => (
        <tr key={index}>
         <IntrestedProperty {...intproperty} />
        </tr>))


  return (
    <div>IntrestedProperties
        {allPropertise}
    </div>
  )
}


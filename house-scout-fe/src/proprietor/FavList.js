import React,{useState,useEffect} from 'react'
import FavProp from './FavProp'
import Axios from 'axios'
import jwt_decode from 'jwt-decode'


export default function FavList() {


  const [favList, setFavList] = useState([]);
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
        displayFavList(user.user.id)
        
      }
      else if (!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }



   }, [])

 const displayFavList = (id) =>{
  Axios.get(`property/FavouriteList?id=${id}`)
  .then((response) => {
    console.log(response)
    setFavList(response.data.favList)
  })
  .catch((err) => {
    console.log("Error Retreiving Properties")
    console.log(err)
  })
 
  //favList
 }
console.log(favList)
console.log(favList[0])
let allFav = []
if(favList != ""){
 allFav = favList[0].property_id.map((property, index) => (
  <div key={index}>
   
   <FavProp {...property} />
  </div> ))

 }


  return (
    <div className='grid'>
    
          {allFav}        

    </div>
  )
}

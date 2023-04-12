import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import Signin from './user/Signin'
import Signup from './user/Signup'
import Home from './proprietor/Home'
import PropertyCreateForm from './proprietor/PropertyCreateForm'
import PropertyList from './proprietor/PropertyList'
import IntrestedProperties from './proprietor/IntrestedProperties'
import MyProperties from './proprietor/MyProperties'
import FavList from './proprietor/FavList'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export default function App() {

  
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})

  useEffect(()=>{
    let token = localStorage.getItem("token")
    if(token != null){
      let user = jwt_decode(token)

      if(user){
        setIsAuth(true)
        setUser(user)
      }
      else if (!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }
  },[])

  const registerHandler = (user) =>{
    Axios.post("auth/signup", user)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
    .then(res => {
      console.log(res.data.token)
      let token = res.data.token
      if(token != null){
        localStorage.setItem("token", token)
        let user = jwt_decode(token)
        setIsAuth(true)
        setUser({...user, userRole:user.userRole})
        
      }
    })
    .catch(err => {
      console.log(err)
      setIsAuth(false)
    })
  }

  const onLogoutHandler = (e) =>{
    e.preventDefault()
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  }


  return (
    <div>
       <Router>
          <div>
          <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">HomeScout</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/signin">Signin</Nav.Link>
            <Nav.Link href="/logout" onClick={onLogoutHandler} >logout</Nav.Link>
            <Nav.Link href="/myProperties" >My Properties</Nav.Link>
            <Nav.Link href="/addProperty" >Add Propert</Nav.Link>
            <Nav.Link href="/intrestedProperties" >Intrested Properties</Nav.Link>
            <Nav.Link href="/houses" >Houses</Nav.Link>
            <Nav.Link href="/apartments" >Apartments</Nav.Link>
            <Nav.Link href="/studios" >Studios</Nav.Link>
            <Nav.Link href="/favouriteList" >Favourite List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          {/* <nav>
              <div>
                <Link to="/">Home</Link> &nbsp;
                <Link to="/signup">Signup</Link> &nbsp;
                <Link to="/signin">Signin</Link> &nbsp;
                <Link to="/logout" onClick={onLogoutHandler}>logout</Link> &nbsp;
                <Link to="/myProperties" >My Properties</Link> &nbsp;
                {/* {isAuth && user.userRole === "clinet" &&  <Link to="/addProperty" >Add Property</Link>}&nbsp; */}
                 {/* <Link to="/addProperty" >Add Property</Link> &nbsp;
                <Link to="/intrestedProperties" >Intrested Properties </Link> &nbsp;
                <Link to="/houses" >Houses</Link> &nbsp;
                <Link to="/apartments" >Apartments</Link> &nbsp;
                <Link to="/studios" >Studios</Link> &nbsp;
                <Link to="/favouriteList" >Favourite List </Link> &nbsp; */}
              {/* </div>
            </nav> */} 
          </div>
          <div>
            <Routes>
              
              <Route path="/" element={<Home/>}></Route>
              <Route path="/signup" element={<Signup register={registerHandler} />}></Route>
              <Route path="/signin" element={<Signin login={loginHandler}/>}></Route>
              <Route path="/addProperty" element={<PropertyCreateForm/>}></Route>
              <Route path="/houses" element={<PropertyList view="houses"/>}></Route>
              <Route path="/apartments" element={<PropertyList view="apartments"/>}></Route>
              <Route path="/studios" element={<PropertyList view="studios"/>}></Route>
              <Route path="/intrestedProperties" element={<IntrestedProperties/>}></Route>
              <Route path="/myProperties" element={<MyProperties/>}></Route>
              <Route path="/favouriteList" element={<FavList/>}></Route>
            </Routes>
          </div>
        </Router>

    </div>
  )
}

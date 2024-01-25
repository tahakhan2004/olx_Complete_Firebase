import React, { useEffect, useState } from 'react'
import LogIn from './view/login/Login'
import SignUp from './view/signup/SignUp'
import { Outlet, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import Home from './view/Home'
import ProductDetail from './view/productDetails'
import SellItems from './view/SellScreen'
import Navbar from './components/navbar'
import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Profile from './view/profile'

const App = () => {
  const [userr, setUser] = useState()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        setUser(user)
    });  
  }, [])
  // console.log(userr);
const navigate = useNavigate()
  useEffect(()=>{
    const {pathname} = window.location
    if(userr){
      if(pathname === "/register" || pathname === "/login"){
        navigate("/")
      }
    }else{
      if(userr === null && pathname === "/sellscreen"){
        navigate("/login")
      }
    }

  }, [window.location.pathname,userr])
  let routes = [
    {
      path: "/",
      element : <Layout/>,
      children: [
        {
          index : true,
          element: <Home/>,
        },

        {
          path : "/product/:id",
          element: <ProductDetail/>,
        },
        {
          path : "/sellscreen",
          element: <SellItems/>,
        },
        {
          path : "/profile",
          element: <Profile userr={userr}/>,
        },
      ]
    },
    {
      path : "/login",
      element: <LogIn/>,
    },
    {
      path : "/register",
      element: <SignUp/>,
    },
  ]

  let elements = useRoutes(routes)
  return (
    <div >

      {elements}

    </div>
  )
}

export default App

const Layout = ()=>{

  return(
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

import React from 'react'
import NavBar from '../components/common/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/ContactUs'
import Blog from '../pages/Blog'
import LiveMarkets from '../pages/LiveMarkets'
import Login from '../pages/Login'
import Register from '../pages/Register'
 

const AppRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/markets' element={<LiveMarkets/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/blog' element={<Blog/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/register' element={<Register/>}/>
      </Routes>
      
    </>
  )
}

export default AppRoutes;

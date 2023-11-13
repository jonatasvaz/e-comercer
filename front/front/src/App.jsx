import React, { useState } from 'react';
//import { BrowserRouter,Routes,Route,Router}from"react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './Components/Navbar';
import Register from "./page/Register"
import Store from './page/Store';
import Login from './page/Login';
import PrivateRoute from './PrivateRoute';
import "./app.css"
import Profile from './page/Profile';
function App() {
 
  return (

    <Router>
     <Navbar/>
   <Routes> 
      <Route  path="/" element={<Home/>} />
      <Route  path="/register" element={<Register/>} />

      <Route element={<PrivateRoute/>} >
           <Route path='/store'  element={<Store/>}/>
           <Route path='/profile'  element={<Profile/>}/>
      </Route>

     <Route  path="/login" element={<Login/>} />
   
   
   </Routes>
   </Router>

  );
};


export default App
import React, { useState } from 'react';
import { BrowserRouter,Routes,Route}from"react-router-dom"
import Home from './page/Home';
import Navbar from './Components/Navbar';
import Register from "./page/Register"
import Store from './page/Store';
import Login from './page/Login';
import "./app.css"
function App() {
 
  return (

    <BrowserRouter>
     <Navbar/>
   <Routes> 
      <Route  path="/" element={<Home/>} />
      <Route  path="/register" element={<Register/>} />
      <Route  path="/store" element={<Store/>} />
      <Route  path="/login" element={<Login/>} />
   </Routes>
 </BrowserRouter>

  );
};


export default App
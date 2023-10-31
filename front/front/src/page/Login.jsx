import { Link ,useNavigate} from "react-router-dom";
import "./Login.css"
import React, { useState } from 'react';

import axios from "axios";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    try {
      
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });
      console.log('Response:', response.data);
      if(response){
       console.log("d")
         navigate("/")
      }
    } catch (error) {
      console.error('Erro ao fazer POST:', error);
    }
 
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='form'>
     
        <h1 className='title'>login</h1>
     

      <div>
      <input
        type="email"
        placeholder="write your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      </div>
      <div>
      <input
        type="password"
        placeholder="write your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
        </div>
    
      
      <button type="submit" className='btn'>Enviar</button>
    </form>
    <p className="p">or</p>
    <h1  className="link"> <Link to="/register">Register</Link></h1>
   
    
    </>
  );
};


export default Login
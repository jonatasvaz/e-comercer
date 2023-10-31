import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate  } from 'react-router-dom';
import "./Login.css"

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password == confirmpassword){ 
      
    
    try {
      
      const response = await axios.post('http://localhost:3000/register', {
        name: name,
        email: email,
        password: password,
        confirmpassword:confirmpassword

      });
      if(response){ 
        return   navigate("/login");
      }
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Erro ao fazer POST:', error);
    }
  }else  {
    console.log("senhas diferente")
  }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='form'>
     
        <h1 className='title'>Register</h1>
     
      <div>
      <input
        type="text"
        placeholder="write your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      </div>
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
        <div>
        <input
        type="password"
        placeholder="confirm your password"
        value={confirmpassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
       </div>
      <button type="submit" className='btn'>Enviar</button>
    </form>
    <p className="p">or</p>
    <h1  className="link"> <Link to="/login">login</Link></h1>
    </>
  );
};


export default Register

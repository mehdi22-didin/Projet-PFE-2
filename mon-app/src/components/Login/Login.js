import axios from 'axios';
import React, { useState } from 'react';
import './signup.css';

function Form() {
  // const [émail, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [loginUserData, setLoginUserData] = useState({
    émail : '',
    password : ''
  });
  const handleChange=(e) => {
    setLoginUserData({
      ...loginUserData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = ()=>{
    const userFormData = new FormData()
    userFormData.append('émail', loginUserData.émail)
    userFormData.append('password', loginUserData.password)
    try{
      axios.post("http://127.0.0.1:8000/GazIndic/generic/user/", loginUserData )
      .then((res) => {
        console.log(res.data);
      });
    }catch(error){
      console.log(error);
    }
    
  }
  return (
    <div className='countainer'>
      <div className='app-wrapper'>
        <h1 className='title-signeup'> Se connecter</h1>
        <div className='utilisateur_name'>
        <div className='utilisateur_name'><input className='input' type='email' name='émail' value={loginUserData.émail} onChange={handleChange} placeholder='email'></input></div>
        <div className='MDP'><input className='input' type='password' name='password' value={loginUserData.password} onChange={handleChange} placeholder='password'></input></div>
        <div className='utilisateur_name'><button className='submit' onClick={handleSubmit}>Se connecter</button></div>

        </div>
        </div>
    </div>
  )
}

export default Form

import '../SignUpTemplate.css'
import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const SignUp = () => {
  const [user , setUser] = useState('')
  const [pass , setPass] = useState('')
  const [confirm, setConfirm] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/register', {username: user , password: pass, confirm: confirm})
    .then(result => console.log(result))
    navigate('/')
   
  }

  return (
    <div className='container'>
    <div className = 'container_image'>
   
    </div>
    <div className = 'signup_container'>
    <p className='span'> Welcome !! Sign Up For An Exciting New Journey</p>
    <form onSubmit={handleSubmit}>
    <p> UserName </p>
      <input onChange={(e) => setUser(e.target.value)}    type = "User" />
     <p> Password </p> 
      <input  onChange =  {(e) => setPass(e.target.value)} type = "Pass" />
      <p> Confirm Password </p>
      <input  onChange = {(e) => setConfirm(e.target.value)}  type ="Confirm" />
      <button className='formbutton' type = "submit"> Sign Up</button>
      </form>
      </div>
    </div>
    
  )

  
}


export default SignUp

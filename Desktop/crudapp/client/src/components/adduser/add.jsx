import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Add.css'
import axios from "axios"
import toast from 'react-hot-toast'
const Add = () => {

  const users = {
    fname :" ",
    lname :" ",
    email :" ",
    password :" ",
  }

const [user,setUser] = useState(users);
const navigate = useNavigate()

const inputHandler = (e) => {
  const {name,value} = e.target;
  setUser({...user,[name]:value})
  console.log(user)
}

const submitForm = async (e) =>{
  e.preventDefault();
  await axios.post("http://localhost:8000/api/create",user)
  .then((response)=>{
    toast.success(response.data.msg, {position:"top-right"})
    navigate("/")
  }).catch(error => console.log(error))
}

  return (
    <div className='addUser'>
    <Link to={"/"}>Back</Link>
    <h1>ADD USER</h1>
    <form className='adduserform' onSubmit={submitForm}>
      <div className="inputgroup">
        <label htmlFor='fname'>First Name</label>
        <input type="text" onChange={inputHandler}  id='fname' name='fname' placeholder='First Name' autoComplete='off'/>
      </div>

      <div className="inputgroup">
        <label htmlFor='lname'>Last Name</label>
        <input type="text" onChange={inputHandler} id='lname' name='lname' placeholder='Lirst Name' autoComplete='off'/>
      </div>
      <div className="inputgroup">
        <label htmlFor='Email'>Email</label>
        <input type="email" onChange={inputHandler} id='email' name='email' placeholder='Email' autoComplete='off'/>
      </div>
      <div className="inputgroup">
        <label htmlFor='Password'>Password</label>
        <input type="password" onChange={inputHandler} id='password' name='password' placeholder='Password' autoComplete='off'/>
      </div>
      <div className="inputgroup">
        <button type="submit">ADD USER</button>
      </div>
    </form>
    </div>

  )
}

export default Add

import React, { useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import '../adduser/add'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Update = () => {


  const users = {
    fname: "",
    lname: "",
    email: ""

  }
const {id} = useParams();
const navigate = useNavigate()
const [user,setUsers] = useState(users)

const inputChangeHandler = (e) =>{
  const {name,value} = e.target;
  setUsers({...user,[name]:value})
  console.log(user);
}

useEffect (()=>{
   axios.get(`http://localhost:8000/api/getOne/${id}`)
   .then((response)=>{
    setUsers(response.data)
   }).catch((error)=>{
    console.log(error);
   })
},[id])

const submitForm = async (e)=>{
  e.preventDefault();
  await axios.put(`http://localhost:8000/api/update/${id}`,user)
  .then((response)=>{
    toast.success(response.data.msg, {position:"top-right"})
    navigate("/")
  }).catch(error => console.log(error))
}

  return (
    <div className='addUser'>
    <Link to={"/"}>Back</Link>
    <h1>UPDATE USER</h1>
    <form className='adduserform' onSubmit={submitForm}>
      <div className="inputgroup">
        <label htmlFor='fname'>First Name</label>
        <input type="text" id='fname' value={user.fname} onChange={inputChangeHandler} name='fname' placeholder='First Name' autoComplete='off'/>
      </div>

      <div className="inputgroup">
        <label htmlFor='lname'>Last Name</label>
        <input type="text" value={user.lname} onChange={inputChangeHandler} id='lname' name='lname' placeholder='Lirst Name' autoComplete='off'/>
      </div>
      <div className="inputgroup">
        <label htmlFor='Email'>Email</label>
        <input type="email" value={user.email} onChange={inputChangeHandler} id='email' name='email' placeholder='Email' autoComplete='off'/>
      </div>
      <div className="inputgroup">
        <button type="submit">UPDATE USER</button>
      </div>
    </form>
    </div>
  )
}

export default Update

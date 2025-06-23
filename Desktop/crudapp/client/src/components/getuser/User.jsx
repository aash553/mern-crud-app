import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./User.css";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setUsers(response.data);
    };
    fetchdata();
  }, []);


  const deleteuser = async(userId) =>{
   await axios.delete(`http://localhost:8000/api/userdelete/${userId}`)
   .then((response)=>{
    setUsers((prevUser)=> prevUser.filter((user)=>user._id!=userId ))
    toast.success(response.data.msg,{position:"top-right"})
   }).catch((error)=>{
    console.log(error);
   })
  }

  return (
    <div className="Usertable">
      <Link to={"/add"} className="addbutton">
        Add user
      </Link>
      <table border={1} cellPadding={20} cellSpacing={0}>
        <thead>
          <tr>
            <th> S.NO </th>
            <th> USER NAME </th>
            <th> USER EMAIL </th>
            <th> ACTION </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {user.fname} {user.lname}
                </td>
                <td> {user.email} </td>
                <td>
                  <button onClick={()=> deleteuser(user._id)} className="deletebutton">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/update/`+ user._id} className="updatebutton">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;

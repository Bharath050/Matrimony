import React, { useState } from 'react'
import axios from "axios";
import './style1.css'
import { useEffect } from 'react';
function Users  ()  {
    const[user,setUser]=useState([]);

    useEffect(() => { getUser()},[]);
    const getUser = async()=>{
        const result = await axios.get('http://localhost:8080/users');
        setUser(result.data);
        console.log(result.data);
      };
      const handleDelete = async(id) =>   {
       await  axios.delete(`http://localhost:8080/delete/${id}`)
        // const result = user.filter((user) => user.getid !== id);
        // setUser(result.updatedUsers);
        // console.log();
        getUser()
    }

  return (
    <div className='back11'>
    <div className='datatable-container1'>
        <table className='datatable1'> 
            <thead>
            <tr id='heading'>
            <th>S.No</th>
            <th>Id</th>
            <th >Name</th>
            <th>Email</th>
            <th>Delete Users</th>            
            </tr>   
        </thead>
        <tbody>
            {
            user.map((user,index)=>(
            <tr>
                    <td key={index}>{index+1}</td>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>

                    </td>
            </tr>))
}
        </tbody>
        </table>


    </div>
    </div>
  )
}
export default Users;
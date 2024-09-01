import React, { useState } from 'react'
import axios from "axios";
// import './style1.css'
import { useEffect } from 'react';
function Users  ()  {
    const[user,setUser]=useState([]);

    useEffect(() => { getUser()},[]);
    const getUser = async()=>{
        const result = await axios.get('http://localhost:8080/getrepo');
        setUser(result.data);
        console.log(result.data);
      };
     

  return (
    <div className='back1'>
    <div className='datatable-container1'>
        <table className='datatable1'> 
            <thead>
            <tr>
            {/* <th>S.No</th> */}
            <th >Name</th>            
            </tr>   
        </thead>
        <tbody>
            {
            user.map((user,index)=>(
            <tr>
                    {/* <td key={index}>{index+1}</td> */}
                    <td>{user.yourname}</td>
            </tr>))
}
        </tbody>
        </table>


    </div>
    </div>
  )
}
export default Users;
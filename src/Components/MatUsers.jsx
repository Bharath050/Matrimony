import { useState ,useEffect} from "react"
import React from 'react'
import axios from "axios";
import './styles.css'
import { useNavigate } from "react-router-dom";
function MatUsers() {
    const[user,setUser]=useState([]);

    useEffect(() => { getUser()},[]);
    const getUser = async()=>{
        const result = await axios.get('http://localhost:8080/getrepo');
        setUser(result.data);
        console.log(result.data);
      };
      
      const handleDelete = async(id) =>   {
          try{
         await  axios.delete(`http://localhost:8080/delete/${id}`);
          const updatedUsers = user.filter((user) => user.getid !== id);
          setUser(updatedUsers);
      }
      catch(err)
      {
        console.log(err);
      }
    }
      let navigate = useNavigate();
      const frndo =()=>{
        navigate("/a");
      }
      const msg =()=>{
        navigate("/msg");
      }
      const edt =()=>{
        navigate("/edt");
      }
      
        

  return (
    <div className="black">
    <div className='back'>  
      <h1>My Friends</h1>
      <div className="idt3">
      <button  className="add" type="button" onClick={frndo}>Add Partners</button>
      <button className="add" onClick={msg}>Start Chatting</button>
      <button type="button" className="add" id="edit" onClick={edt}>Edit Profile</button>
      </div>

    <div className='datatable-container'>
        <table className='datatable'> 
            <thead>
            <tr>

            <th>S.No</th>
            <th>Id</th>
            <th>Name</th>
            <th >Dob</th>
            <th >Age</th>
            <th>Email</th>
            <th >WhatsAppNo</th>
            <th >MobileNo</th>
            <th >salary</th>
            <th >Qualification</th>
            <th >Native</th>
            <th >locality</th>
            <th>Remove Partner</th>            
            </tr>   
        </thead>
        <tbody>
        {
            user.map((user,index)=>(
            <tr key={user.id}>
                    <td key={index}>{index+1}</td>
                    <td>{user.id}</td>
                    <td>{user.yourname}</td>
                    <td>{user.dob}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.whatsappnum}</td>
                    <td>{user.mobilenum}</td>
                    <td>{user.yoursalary}</td>
                    <td>{user.qualification}</td>
                    <td>{user.native}</td>
                    <td>{user.locality}</td>
                    <td>
                    <button onClick={() => handleDelete(user.id)}>Remove</button>

                    </td>
            </tr>))
        }
        </tbody>
        </table>
     
        


    </div>
    </div>
    </div>
  )
}
export  default MatUsers;

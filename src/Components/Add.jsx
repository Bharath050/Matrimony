import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Add.css';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  let navigate = useNavigate()
  const finv = ()=>{
    navigate("/final");
  }

  const getUser = async () => {
    try {
      const result = await axios.get('http://localhost:8080/img');
      setUser(result.data);
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className='groundd'>
      <h2>Add Friends</h2>
    <div className='container1'>
      {user.map((user, index) => (
        <div key={user.id}>
          <div className='flex'> id: {user.id}</div>
          <div className='flex'id="myimage"><img src={user.img} alt={user.yourname}/></div>
          <br/>
          <div className='flex' id='name'>Name: {user.yourname}</div>
          
          <div className='cont1'>
          <div className='flex' id='border'>Dob: {user.dob} </div>
          <div className='flex'>Age: {user.age}</div>
          </div>
          <div className='cont1'>
          <div className='flex' id='border'>Email: {user.email}</div>
          <div className='flex'>Qualification: {user.qualification}</div>
          </div>
          <div className='cont1'> 
          {/* <div className='flex'>Wn: {user.whatsappnum}</div> */}
          <div className='flex' id='border'>Mobileno: {user.mobilenum}</div>
          <div className='flex'> Salary: {user.yoursalary}</div>
          </div>
          <div className='cont1'>
          <div className='flex' id='border'>native: {user.native}</div>
          <div className='flex'>locality: {user.locality}</div>
          </div>
          <button onClick={finv}>Add Friend</button>
          </div>
      ))}
    </div>
    </div>

  );
}

export default Add;

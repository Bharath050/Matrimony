import axios from 'axios';
import React, {  useState } from 'react';
import "./Edit.css"
import { useNavigate } from 'react-router-dom';
export default function Edit() {

  const [user, setUser] = useState({
    id:"",
    yourname: "",
    email:"",
    password:"",
    age:"",
    mobilenum:"",
    whatsappnum:"",
    yoursalary:"",
    dob:"",
    qualification:"",
    locality:"",
    native:""
  });

  const {id, yourname,email,password,age,mobilenum,whatsappnum,yoursalary,dob,qualification,locality,native } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

 
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8080/edit",user);

      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };
  let navigate = useNavigate()
  const other = ()=>{
      navigate("/mget")
  }

  return (
    <div className="container">
      <div className="row">
          <h2 className="text">Update Profile</h2>
          <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-4">
              <label htmlFor="id" className="form-label">ID</label>
              <input type="number" className="form-control" placeholder="Enter your Id" name="id" value={id} onChange={(e) => onInputChange(e)}/>
              <label htmlFor="yourname" className="form-label" id="spacing">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your Name" name="yourname" value={yourname} onChange={(e) => onInputChange(e)}/>
            </div>


          <div className="mb-4">
           <label htmlFor="email" className="form-label">E-mail</label>
              <input type="text" className="form-control" placeholder="E-mail" name="email" value={email} onChange={(e) => onInputChange(e)}/>
            <label htmlFor="password" className="form-label" id="spacing">Password</label>
              <input type="password" className="form-control" placeholder="Enter your Password" name="password" value={password} onChange={(e) => onInputChange(e)}/>
            </div>


            <div className="mb-4">
            <label htmlFor="age" className="form-label"> Age </label>
              <input type="number" className="form-control" placeholder="Enter your Age" name="age" value={age} onChange={(e) => onInputChange(e)}/>
              <label htmlFor="mobilenum" className="form-label" id="spacing">Moblile No</label>
              <input type="number" className="form-control" placeholder="Enter your Mobilenum" name="mobilenum" value={mobilenum} onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="mb-4">
              <label htmlFor="whatsappnum" className="form-label">Whatsappnum</label>
              <input type="number" className="form-control" placeholder="Enter your Whatsappnum" name="whatsappnum" value={whatsappnum} onChange={(e) => onInputChange(e)}/>
              <label htmlFor="yoursalary" className="form-label" id="spacing">Salary</label>
              <input type="number" className="form-control" placeholder="Enter your salary" name="yoursalary" value={yoursalary} onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="mb-4">
              <label htmlFor="dob" className="form-label">DOB</label>
              <input type="date" className="form-control" placeholder="Enter your DOB" name="dob" value={dob} onChange={(e) => onInputChange(e)}/>
              <label htmlFor="qualification" className="form-label" id="spacing">Qualification</label>
              <input type="text" className="form-control" placeholder="Enter your Qualification" name="qualification"value={qualification} onChange={(e) => onInputChange(e)}/>
            </div> 

            <div className="mb-4">
              <label htmlFor="locality" className="form-label">Locality</label>
              <input type="text" className="form-control" placeholder="Enter your locality" name="locality"value={locality} onChange={(e) => onInputChange(e)}/>
              <label htmlFor="native" className="form-label" id="spacing">Native</label>
              <input type="text" className="form-control" placeholder="Enter your Native" name="native"value={native} onChange={(e) => onInputChange(e)}/>
            </div> 

            <button type="submit" className="btn btn-outline-primary" onClick={other}>
              Submit
            </button>
          </form>
        </div>
    </div>
  );
}
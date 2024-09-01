import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Mat=()=>  {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[dob,setDob] = useState('');
    const[native,setNative] = useState('');
    const[qualification,setQualification] = useState('');
    const[age,setAge] = useState('');
    const[locality,SetLocality] = useState('');
    const[mobilenum,SetMobileNum] = useState('');
    const[whatsappnum,setWhatsappnum] = useState('');
    const[yourname,setYourname] = useState('');
    const[yoursalary,setYoursalary] = useState('');
    
    
    let navigate  = useNavigate();
  
     const already = ()=>{
        navigate('/matreg');
     }
    async function save(e) {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/postrepo",{
                yourname:yourname,
                password:password,
                dob: dob,
                age:age,
                email:email,
                whatsappnum:whatsappnum,
                mobilenum:mobilenum,
                yoursalary:yoursalary,
                qualification:  qualification,
                native:native,
                locality:locality


            });
            alert("🎉🎉🎉Congratulations🎉🎉🎉");
            navigate('/mget');
        }
        catch(err)
        {
            alert(err);
        }
    }
    return (
          <div className="Appa">
            <div>
                <button className='matlog' onClick={already}>Click here if already Registered</button>
            </div>
                <div className="auth-form-container">
                    <h2>Create Account To Hold your Partner</h2>
                <form className="re" onSubmit={save} >
                    <label className="lable" htmlFor="yourname">Full Name</label> 
                    <input className="input" required value={yourname} onChange={(e)=>setYourname(e.target.value)} type="text" placeholder="Full Name" id="yourname" name="yourname" />
                    
                    <label className="lable" htmlFor="dob">Date Of Birth</label>
                    <input className="input" required value={dob} onChange={(e)=>setDob(e.target.value)} type="date" placeholder="DateOfBirth" id="dob" name="dob" />
                    
                    <label className="lable" htmlFor="age">Enter Your Age</label>
                    <input className="input" required value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter your age" id="age" name="age" /> 
                    
                    <label className="lable" htmlFor="email">Email</label>
                    <input className="input" required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@gmail.com" id="email" name="email" />
                    
                    <label className="lable" htmlFor="password">Password</label>
                    <input className="input" required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />
                    
                    <label className="lable" htmlFor="whatsappnum">WhatsApp Number</label>
                    <input  className="input" required value={whatsappnum}onChange={(e)=>setWhatsappnum(e.target.value)} type="number" placeholder="WhatsApp Number" id="whatsappnum" name="whatsappnum" />

                    <label className="lable" htmlFor="mobilenum">Mobile Number</label>
                    <input  className="input" required value={mobilenum}onChange={(e)=>SetMobileNum(e.target.value)} type="number" placeholder="Mobile Number" id="mobilenum" name="mobilenum" />

                    <label className="lable" htmlFor="yoursalary">Salary</label>
                    <input  className="input" required value={yoursalary}onChange={(e)=>setYoursalary(e.target.value)} type="number" placeholder="Salary" id="yoursalary" name="yoursalary" />
                    
                    <label className="lable" htmlFor="qualification">Qualification</label>
                    <input className="input" required value={qualification} onChange={(e)=>setQualification(e.target.value)} type="text" placeholder="Enter your Qualification" id="qualification" name="qualification" />
                    
                    <label className="lable" htmlFor="native">Enter your Native</label>
                    <input className="input" required value={native} onChange={(e)=>setNative(e.target.value)} type="text" placeholder="Enter your Native" id="native" name="native" />                  
                    
                    <label className="lable" htmlFor="locality">your Locality</label> 
                    <input className="input" required value={locality} onChange={(e)=>SetLocality(e.target.value)} type="text" placeholder="Locality" id="locality" name="locality" />


                    <button className="b" type="submit">Createa Account</button> 
                </form>
               
                </div>
                </div>
    )
  }
// }
export default Mat;
import React,{useState} from "react";
import axios from "axios";
import '../App.css';
import {  useNavigate } from "react-router-dom";
const Login=(props)=>{
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  let navigate = useNavigate();
//   navigate = useNavigate();
  const regNav = () =>{
  navigate('/Register');
}
const navToUS = ()=>{
  navigate('/get')
}
  async function save(e){
      e.preventDefault();
      try{
          await axios.post("http://localhost:8080/login",{
              
          email:email,
          password:password,
       }).then((response)=>
       {
          if(response.data==="success")
          {
              alert("Login Success");

                  navigate('/Home');

          }
          else{
                  alert("Email Or Password Not Matches");
                  navigate('/Login');
          }
       }

       )
      }
  catch(er){
      alert(er);
  }
}


  return(
    <div className="App">
      <div className="auth-form-container">
          <h2>LogIn</h2>
      <form onSubmit={save} className="log">
          <label htmlFor="email" className="lable">Email</label>
          <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@gmail.com" id="email" name="email" required/>
          <label htmlFor="password" className="lable">Password</label>
          <input className="input" value={password}onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" required/>
          <button className="b" type="submit">LogIn</button>
      </form>
      <button className="link" onClick={regNav}>Don't have account?Create Account</button>
      <button className="linkk" onClick={navToUS}>Registered Users</button>
      </div>
      </div>
  )
}
export default Login;

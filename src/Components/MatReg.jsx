
import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css"

const MatReg =()=> {
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
let navigate = useNavigate();
  navigate = useNavigate();
    const regi = () =>{
        navigate("/in")
    }

async function save(e){
    e.preventDefault();
    try{
        await axios.post("http://localhost:8080/matchk",{
            
        email:email,
        password:password,
     }).then((response)=>
     {
        if(response.data==="Found")
        {
            alert("Welcome");

                navigate('/mget');

        }
        else{
                alert("Email Or Password Not Matches");
                navigate('/in');
        }
     }

     )
    }
catch(er){
    alert(er);
}
}


return(
  <div className="naApp">
    <div className="auth-form-container">
        <h2 id="account">Account Login</h2>
    <form onSubmit={save} className="log">
        <label htmlFor="email" className="lable">Email</label>
        <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@gmail.com" id="email" name="email" required/>
        <label htmlFor="password" className="lable">Password</label>
        <input className="input" value={password}onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" required/>
        <button className="b" type="submit">check...</button>
    </form>
    <button className="link" onClick={regi}>Not Registered?Quick Register!!</button>
    {/* <button className="linkk" onClick={navToUS}>Registered Users</button> */}
    </div>
    </div>
)
}
export default MatReg;



import React,{useState} from "react";
import axios from "axios";
import '../App.css';
import { useNavigate } from "react-router-dom";
 const Register=(props)=>{
            const[email,setEmail]=useState('');
            const[password,setPassword]=useState('');
            const[username,setUsername]=useState('');   
            
            
            let navigate  = useNavigate();
          
             const HomeNav = ()=>{
                navigate('/lo');
             }
            async function save(e){
                e.preventDefault();
                try{
                    await axios.post("http://localhost:8080/save",{
                        username: username,
                        email:email,
                        password:password
                    });
                    alert("Regestration success");
                    navigate('/Home');
                }
                catch(err)
                {
                    alert(err);
                }
             }
            return(
                <div className="App">
                <div className="auth-form-container">
                    <h2>Create  Account</h2>
                <form className="re" onSubmit={save}>
                    <label className="lable" htmlFor="name">Full Name</label>
                    <input className="input" required value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Full Name" id="username" name="username" />
                    <label className="lable" htmlFor="email">Email</label>
                    <input className="input" required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@gmail.com" id="email" name="email" />
                    <label className="lable" htmlFor="password">Password</label>
                    <input  className="input" required value={password}onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />
                    <button className="b" type="submit">Register</button>
                </form>
                <button className="link" onClick={HomeNav}>Already have account? LogIn here</button>
                </div>
                </div>
            )
}
export default Register;
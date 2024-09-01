import React from 'react'
import "./Final.css"
import { useNavigate } from 'react-router-dom';
function Final() {
     let navigate = useNavigate()
     const back =()=>{
         navigate("/mget")
     }
  return (
    <div className='backimg'>
        <h3>You Can Start Chatting Once He Or She Accept The Request</h3>
        <button onClick={back}>Back</button>
    </div>
  )
}


export default Final;

import Login from './Components/Login'
import Register from './Components/Register'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Users from './Components/Users';
import Mat from './Components/Mat';
import MatUsers from './Components/MatUsers';
import Home from './Components/Home';
import MatReg from './Components/MatReg';
import Add from './Components/Add';
import Final from './Components/Final';
import Message from './Components/Message';
import Edit from './Components/Edit';
import First from './Components/First';



function App() {
  return (
   
    <div > 
      
     <BrowserRouter>
    <Routes> 
     <Route path="/" element={<First/>}/>
     <Route path="/lo" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/get" element={<Users/>}/>
    <Route path="/in" element={<Mat/>}/>
    <Route path="/mget" element={<MatUsers/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/matreg" element={<MatReg/>}/>
    <Route path="/a" element={<Add/>}/>
    <Route path='/final' element={<Final/>}/>      
    <Route path='/msg' element={<Message/>}/>      
    <Route path='/edt' element={<Edit/>}/>      
    </Routes> 
  </BrowserRouter>      
 
  
    </div> 
   
  );
}

export default App;

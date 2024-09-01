import React  from 'react'
import './Fst.css' 
import { useNavigate } from 'react-router-dom';

const First = () => {
  
     let navigate = useNavigate();
    const goman = () =>{
      navigate('/lo');
    }
    return (
      <div className='backy'>
        <header className='cntr'>
            <h1 id='title'>Badugar Matrimony</h1>
            <h1>Welcome To Marriage Life</h1>
        </header>
        <body className='fnl'>
              <h1 id='mov'>click start button</h1>
              <h1 id='mov1'>to choose your partner</h1>
              <h1 id='mov2'>choose correctly:live happily</h1>
              <button type="submit" id='fstb' onClick={goman}>START</button>
        </body>
     </div>
    );
  };

export default First;
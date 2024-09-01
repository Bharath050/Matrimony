import React from 'react';
import '../Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
const NavMat = () =>
{
     navigate("/in")
}
  return (
    <div className="container3">
      <header className='h211'>
        <h1>Matrimony</h1>
      </header>
      <section className="hero-section">
        <h2>Your Perfect Match Awaits</h2>
        <p>Find your life partner with Matrimony</p>
      </section>
      <section className="features-section">
        <div className="feature">          
          <h3>Marriage</h3>
          <p className='p1'>Even A Small Gesture of Love Can Have a Big Impact On Your Marriage</p>
        </div>
        <div className="feature">          
          <h3>Chat and Connect</h3>
          <p className='p2'>Start conversations and build meaningful connections</p>
        </div>
      </section>
        <button className='stpanu' onClick={NavMat}>Get Started</button>
      <footer>
        <p>© 2023 Matrimony. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

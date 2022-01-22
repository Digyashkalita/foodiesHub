import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImproveSkills from './components/ImproveSkills';

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='container main'>
        <HeroSection />
        <ImproveSkills />
      </div>
    </>
  );
}

export default App;

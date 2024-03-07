import React from 'react';
// import logo from './assests/logo.jpeg'; 

const Dashnavbar = ({ onPageChange }) => {
  return (
    
    <div className="navbar">
    <div className="">
      <img src="" alt='logo' />
      <button className="create-process-btn">Create Process</button>
    </div>
        
      <button onClick={() => onPageChange('Dashboard')}>Dashboard</button>
      <button onClick={() => onPageChange('Overview')}>Overview</button>
      <button onClick={() => onPageChange('Canvas')}>Canvas</button>
      <button onClick={() => onPageChange('Interview')}>Interview</button>
      <button onClick={() => onPageChange('Exports')}>Exports</button>
    </div>
    
  );
};

export default Dashnavbar;

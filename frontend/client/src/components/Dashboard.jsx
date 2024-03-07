import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import Dashnavbar from './Dashnavbar';
import Overview from './Overview';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="dashboard" >
      
      <div className="main-content">
        
        <Dashnavbar onPageChange={handleNavigation} />
        <div className='dash'>
        <Sidebar />
        
        {currentPage === 'Dashboard' && <h1>Your Dashboard is Empty Please Add a Process</h1>}
        {currentPage === 'Overview' && <Overview />}
        {currentPage === 'Canvas' && <Canvas/>}
        {currentPage === 'Interview' && <h1>Interview Page</h1>}
        {currentPage === 'Exports' && <h1>Exports Page</h1>}
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Overview.css';

const Overview = () => {
  const navigate = useNavigate();
  
  const [inputs, setInputs] = useState({
    KeyPartners: '',
    KeyActivities: '',
    ValuePropositions: '',
    CustomerRelationships: '',
    CustomerSegments: '',
    KeyResources:'',
    Channels:'',
    CostStructure:'',
    RevenueStreams:'',
  });
  

  const handleInputChange = (section, value) => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [section]: value
      
    }));
    
  };
  



  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      await axios.post('user-input', inputs);
      alert('Input data saved successfully!');
      navigate('/canvas');
    } catch (error) {
      console.error('Error saving input data:', error);
      alert('Error saving input data. Please try again later.');
    }
  };

  return (

    
    
    <div className='bmc-container'>
      
    
      <form onSubmit={handleSubmit}>

        <div className='bmc1-container'>
          
          <div className="section key-partners">
            <textarea
              value={inputs.KeyPartners}
              onChange={(e) => handleInputChange('KeyPartners', e.target.value)}
              placeholder="Key Partners"
              
            />
          </div>
        <div className='bmc2-container'>
          <div className="section key-activities">
              <textarea 
                value={inputs.KeyActivities}
                onChange={(e) => handleInputChange('KeyActivities', e.target.value)}
                placeholder="Key Activities"
              />
            </div>
            <div className="section key-Resources">
              <textarea 
                value={inputs.KeyResources}
                onChange={(e) => handleInputChange('KeyResources', e.target.value)}
                placeholder="Key Resources"
              />
            </div>
        </div>
        <div className='bmc3-container'>
          <div className="section Value-Propositions">
            <textarea
              value={inputs.ValuePropositions}
              onChange={(e) => handleInputChange('ValuePropositions', e.target.value)}
              placeholder="Value Proportions"
              
            />
          </div>
          <div className='bmc2-container'>
          <div className="section customer">
              <textarea 
                value={inputs.CustomerRelationships}
                onChange={(e) => handleInputChange('CustomerRelationships', e.target.value)}
                placeholder="Customer Relationships"
              />
            </div>
            <div className="section Channels">
              <textarea 
                value={inputs.Channels}
                onChange={(e) => handleInputChange('Channels', e.target.value)}
                placeholder="Channels"
              />
            </div>
          </div>
          <div className="section Customer-Segments">
            <textarea
              value={inputs.CustomerSegments}
              onChange={(e) => handleInputChange('CustomerSegments', e.target.value)}
              placeholder="Customer Segments"
              
            />
          </div>


        </div>

 
        
          
        
          

        </div>
        <div className='bmc-bottom'>
        <div className="section Cost-Structure">
            <textarea
              value={inputs.CostStructure}
              onChange={(e) => handleInputChange('CostStructure', e.target.value)}
              placeholder="Cost Structure"
              
            />
          </div>

          <div className="section Revenue-Streams">
            <textarea
              value={inputs.RevenueStreams}
              onChange={(e) => handleInputChange('RevenueStreams', e.target.value)}
              placeholder="Revenue Streams"
              
            />
          </div>


        </div>



        
        
        
        <button className='canvas-done-btn' type="submit">Done</button>
      </form>
   

    </div>
    
  );
};

export default Overview;

import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import "./Canvas.css"

const Canvas = () => {
  const [diagramData, setDiagramData] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      fetchDiagramDataFromBackend()
        .then(data => {
          setDiagramData(data);
          setDataFetched(true);
        })
        .catch(error => console.error('Error fetching diagram data:', error));
    }
  }, [dataFetched]);

  const fetchDiagramDataFromBackend = async () => {
    try {
      const response = await axios.get('gpt-output'); 
      return response.data;
    } catch (error) {
      console.error('Error fetching diagram data:', error);
      throw error;
    }
  };

  return (
    <div className="canvas">
      <canvas id="visioCanvas" width="1200" height="150" />
      <div style={{ textAlign: "center",marginBottom:"200px" }}>
        <textarea
          readOnly
          value={diagramData || ''}
          name=""
          id=""
          cols="30"
          rows="10"
        />
      </div>
    </div>
  );
};

export default Canvas;

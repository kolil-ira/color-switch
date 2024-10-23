import React, { useState } from 'react';
import './App.css'; 

function App() {
  // this is for the color switch :i used array
  const colors = ['white', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange'];
  
  // State to keep track of c.data
  const [colorIndex, setColorIndex] = useState(0);

  // Function to switch color
  const changeBgColor = () => {
    // Move to 
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div 
      className="App" 
      style={{
        backgroundColor: colors[colorIndex], 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
      <button onClick={changeBgColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background Color
      </button>
    </div>
  );
}

export default App;

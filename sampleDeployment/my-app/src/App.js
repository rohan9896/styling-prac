import './App.css';
import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <h1>Rohan Gupta</h1>
      <button onClick={() => setNum(num+1)}>Click here - {num}</button>
    </div>
  );
}

export default App;

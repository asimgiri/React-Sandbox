import React from 'react';
import 'axios/dist/axios';
import Axios from './components/Axios';
import './App.css';
import Responsive from './components/Responsive';
import DragEvent from './components/DragEvent';

function App() {
  return (
    <div className="App">
      <DragEvent />
    </div>
  );
}

export default App;

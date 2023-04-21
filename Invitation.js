import React from 'react';
import Invitation from './components/Invitation';
import './App.css';

function App() {
  return (
    <Invitation 
    subject="Birthday Party Invitation"
    to="jaGdish@gmail.com"
    name="jaGdish"
    event="birthday party"
    friends="Ritu, Saurabh, Kartik"
    Location="Green field Avenue"
    />
  );
}

export default App;
import './App.css';
import Alert from './Components.js/Alert';
import Clock from './Components.js/Clock';
import Navbar from './Components.js/Navbar';
import Textform from './Components.js/Textform';
import React, { useState } from 'react'


function App() {

   const[clock,setClock]=useState(new Date().toLocaleTimeString())

   const digitalClock = ()=>{
    setClock(new Date().toLocaleTimeString())
   };

   setInterval(digitalClock,1000);

  return (

    <>
      <h1> Current Time {clock}</h1>
    </> 

  );
}

export default App;

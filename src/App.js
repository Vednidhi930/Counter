import './App.css';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {

  const[count,setCount]=useState(0);

  const increMent=()=>{
    setCount(count+1);
  }

  const decreMent=()=>{
    if(count===0){
      setCount(0)
      alert("Zero Limit exist!")
    }else{
      setCount(count-1);
    }
  }

  return (

    <>
      <div className='main-div'>
        <div className='box'>
          <br />
          <div className='heading'>
            <h1>Welcome</h1>
          </div>
          <br />
          <div className='count'>
            <h1>{count}</h1>
          </div>
           <div className='count-btn'>
            <Button className='btn1' onClick={increMent}>
               <AddIcon/>
            </Button>
            <Button className='btn2' onClick={decreMent}>
              <DeleteIcon/>
            </Button>
            </div>
        </div>
      </div>
    </>

  );
}

export default App;

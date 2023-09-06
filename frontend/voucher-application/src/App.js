import logo from './logo.svg';
import './App.css';
import Form from './componets/Form';
import Alert from './componets/Alert';
import { useEffect, useState } from 'react';
function App() {
  const [isAlert,isAlertSet]=useState({posivite:false,message:""})
  const [opacity,opacitySet]=useState(0)
  const updateHandler=(posivite,message)=>{
    isAlertSet(prev=>({message:message,posivite:posivite}))
  }
  useEffect(()=>{
    opacitySet(1)
    setTimeout(()=>{opacitySet(0)},3000)
  },[isAlert])
  return (
    <div className='App'>
      <Form updateHandler={updateHandler}></Form>
      {isAlert.message&&<Alert message={isAlert.message} posivite={isAlert.posivite} opacity={opacity}></Alert>}
    </div>
  );
}

export default App;

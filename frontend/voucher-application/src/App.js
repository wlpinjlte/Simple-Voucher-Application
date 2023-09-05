import logo from './logo.svg';
import './App.css';
import Form from './componets/Form';
import Alert from './componets/Alert';
import { useState } from 'react';
function App() {
  const [isAlert,isAlertSet]=useState({posivite:false,is:true,message:""})
  const updateHandler=(posivite,is,message)=>{
    isAlertSet(prev=>({message:message,is:is,posivite:posivite}))
  }
  return (
    <div className='App'>
      <Form updateHandler={updateHandler}></Form>
      {isAlert.is&&<Alert message={isAlert.message} posivite={isAlert.posivite}></Alert>}
    </div>
  );
}

export default App;

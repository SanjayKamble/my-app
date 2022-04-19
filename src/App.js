
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Random from './components/Random';

// import Car from './components/Car'
import TextForm from './components/TextForm';
// import Card from './components/Card';
import React from 'react';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light');

  const [textColor, setTextColor] = useState('text-dark');

  const [message, setMessage] = useState(null);

  const showMessage=(message,type) => {
    setMessage({
      msg:message,
      type:type
    });

    setTimeout(() => {
      setMessage(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      setTextColor('text-light');
      document.body.style.backgroundColor='grey';
      document.body.style.color='white';
      showMessage('Dark Mode enabled','success');
      
    }
    else{
      setMode('light');
      setTextColor('text-dark');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showMessage('Light Mode enabled','success')
    }

  }

  return (
    <>
      {/* <Navbar title="New Website" aboutText ="About us"/> */}
      
      <Alert message={message} ></Alert>
      {/* <Car model='mahindra' /> */}
      {/* <Car /> */}
      
      {/* <Random /> */}


      <div className="container">
      {/* <Card></Card> */}
   
        {/* <TextForm heading ="Enter the text to analyze:" mode = {mode} showMessage={showMessage} /> */}

        <Router>
        <Navbar mode={mode} textColor = {textColor} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/" element={<TextForm heading ="Enter the text to analyze:" mode = {mode} showMessage={showMessage} /> }
/>
          <Route exact path="/about" element={<About/>}/>
          
        </Routes>
     
    </Router>
      </div>

      {/* <About></About> */}


    </>
  );
}

export default App;

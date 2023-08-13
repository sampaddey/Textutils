// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        setalert(null);
      }, 1500);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode enabeled","sucess ");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode enabeled","sucess");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          about="TextAbouts"
          mode={mode}
          togglemode={togglemode}
        />
        {/* <Alert alert={alert} /> */}
        <Alert alert={alert}/>
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              exact path="/"
              element={
                <Textform showalert={showalert} heading="Enter your text" mode={mode}/>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
  
}

export default App;


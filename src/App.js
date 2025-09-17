import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
}  from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => setalert(null), 3000); 
  }

 useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
    } else if (mode === 'red') {
      document.body.style.backgroundColor = 'rgba(251, 0, 0, 1)';
      document.body.style.color = 'white';

    }else if (mode === 'blue') {
      document.body.style.backgroundColor = 'rgba(0, 4, 255, 1)';
      document.body.style.color = 'white';
    }
    else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [mode]);

  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light');
      showalert("Light mode is enabled", "success");
      document.title ="TextUtils - Light Mode"
    } else {
      setmode('dark');
      showalert("Dark mode is enabled", "success");
       document.title ="TextUtils - Dark Mode"
    }
  }

    const togglredemode = () => {
    if (mode === 'red') {
      setmode('light');
      showalert("Light mode is enabled", "success");
       document.title ="TextUtils - Light Mode"
    } else {
      setmode('red');
      showalert("red mode is enabled", "success");
      document.title ="TextUtils - Red Mode"
    }
  }

   const togglbluemode = () => {
    if (mode === 'blue') {
      setmode('light');
      showalert("Light mode is enabled", "success");
       document.title ="TextUtils - Light Mode"
    } else {
      setmode('blue');
      showalert("blue mode is enabled", "success");
       document.title ="TextUtils - Blue Mode"
    }
  }

  return (
     <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} togglredemode={togglredemode} togglbluemode={togglbluemode}/>
      <Alerts alert={alert} onClose={() => setalert(null)} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact  path="/" element={<TextForm mode={mode} showalert={showalert} heading="Enter the text to Analyze below"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
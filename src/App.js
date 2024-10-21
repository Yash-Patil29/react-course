import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes, // <-- Use Routes instead of Switch,
  Route,
  // Link
} from "react-router-dom";


  function App() {
    const [mode, setMode] = useState('light'); // Dark mode state
    const [alert, setAlert] = useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      });
      // Automatically clear the alert after 3 seconds
      setTimeout(() => {
        setAlert(null);
      }, 3000);

    };

    const toggleMode=()=>{
      if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enable","success");
    }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert("light mode has been enable","success");
      }
    }
    return (
      <>
        <Router>
          <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} about="About"></Navbar>
          {/*<Navbar></Navbar>*/}
          <Alert alert={alert}></Alert>
          <div className="container my-3">
            <Routes>
            <Route path="/about" element={<About mode={mode} />} /> {/* <-- Use element prop */}
            <Route path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            </Routes>
          {/* <About></About> */}
          </div>
        </Router>
      </>
    );

  }

  export default App;

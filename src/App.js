import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';
import Alert from './component/Alert';


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
      showAlert("Dark moode has been enable","success");
    }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert("light moode has been enable","success");
      }
    }
    return (
      <>
        <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} about="About text"></Navbar>
        {/*<Navbar></Navbar>*/}
        <Alert alert={alert}></Alert>
        <div className="container my-3">
        <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" />
        </div>
      </>
    );

  }

  export default App;

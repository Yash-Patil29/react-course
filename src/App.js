  import { useState } from 'react';
  import './App.css';
  import Navbar from './component/Navbar';
  import TextFrom from './component/TextFrom';


  function App() {
    const [mode, setMode] = useState('light'); // Dark mode state
    const toggleMode=()=>{
      if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
    }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
      }
    }
    return (
      <>
        <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} about="About text"></Navbar>
        {/*<Navbar></Navbar>*/}
        <div className="container my-3">
        <TextFrom heading ="Enter the text to analyze below"></TextFrom>
        </div>
      </>
    );

  }

  export default App;

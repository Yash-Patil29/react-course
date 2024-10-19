  import './App.css';
  import Navbar from './component/Navbar';
  import TextFrom from './component/TextFrom';


  function App() {
    return (
      <>
        <Navbar title ="TextUtils" about="About text"></Navbar>
        {/*<Navbar></Navbar>*/}
        <div className="container my-3">
        <TextFrom heading ="Enter the text to analyze below"></TextFrom>
        </div>
        <div class="container-fluid">
        </div>
      </>
    );

  }

  export default App;

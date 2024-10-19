  import React,{useState} from 'react'
  import PropTypes from 'prop-types'



  // have to add props in bracket to use props or will throw error
  export default function TextFrom(props) {
    const [text, settext] = useState('Enter text here');
    const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode

      const handleUpClick=()=>{
          // console.log("Upper case was clicked: " + text);
          let newtext=text.toUpperCase();
          settext(newtext)
      }
      const handleLoClick=()=>{
        // console.log("Lower case was clicked: " + text);
        let newtext=text.toLowerCase();
        settext(newtext)
      }
      const handleClearClick=()=>{
        // console.log("Clear was clicked: " + text);
        let newtext='';
        settext(newtext)
      }
      const handleCopyClick=()=>{
        // console.log("Copy was clicked: " + text);
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
      }
      const handleonchange=(event)=>{
          // console.log("on change handle");
          settext(event.target.value);
      }
      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode); // Toggle dark mode
      };
      const themeStyles = {
        backgroundColor: isDarkMode ? '#343a40' : 'white',
        color: isDarkMode ? 'white' : 'black',
      };
      const ButtonStyles = {
        backgroundColor: isDarkMode ? '#343a40' : 'white',
        color: isDarkMode ? 'white' : 'black',
      };
      
    return (
      <>
      <div className="container" style={themeStyles}>
          <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea className="form-control" value={text} onChange={handleonchange} style={themeStyles} id="mybox" rows="10"></textarea>
        </div>
        <button className='btn btn-primary mx-3'onClick={handleUpClick}style={ButtonStyles}>Convert to Uppercase </button>
        <button className='btn btn-primary mx-3'onClick={handleLoClick}style={ButtonStyles}>Convert to Lowercase </button>
        <button className='btn btn-primary mx-3'onClick={handleClearClick}style={ButtonStyles}>Clear text </button>
        <button className='btn btn-primary mx-3'onClick={handleCopyClick}style={ButtonStyles}>Copy text </button>
      </div>
      <div className="container my-2" style={themeStyles}>
        <h1>Your text summary</h1>
        <p> {text.split(" ").length } word {text.length } character</p>
        <p>{0.008*text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
      </div>
      <button
          type="button"
          className='btn btn-dark mx-3'
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
      </>
    )
  }

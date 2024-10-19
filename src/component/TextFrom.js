import React,{useState} from 'react'
import PropTypes from 'prop-types'



// have to add props in bracket to use props or will throw error
export default function TextFrom(props) {
    const handleUpClick=()=>{
        // console.log("Upper case was clicked: " + text);
        let newtext=text.toUpperCase();
        settext(newtext)
    }
    const handleLoClick=()=>{
      // console.log("Upper case was clicked: " + text);
      let newtext=text.toLowerCase();
      settext(newtext)
  }
    const handleonchange=(event)=>{
        // console.log("on change handle");
        settext(event.target.value);
    }
    const [text, settext] = useState('Enter text here');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
      <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="10"></textarea>
      </div>
      <button className='btn btn-primary mx-3'onClick={handleUpClick}>Convert to Uppercase </button>
      <button className='btn btn-primary mx-3'onClick={handleLoClick}>Convert to Lowercase </button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p> {text.split(" ").length } word {text.length } character</p>
      <p>{0.008*text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}

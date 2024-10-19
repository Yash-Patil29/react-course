import React,{useState} from 'react'
import PropTypes from 'prop-types'



// have to add props in bracket to use props or will throw error
export default function TextFrom(props) {
    const handleUpClick=()=>{
        // console.log("Upper case was clicked: " + text);
        let newtext=text.toUpperCase();
        settext(newtext)
    }
    const handleonchange=(event)=>{
        // console.log("on change handle");
        settext(event.target.value);
    }
    const [text, settext] = useState('Enter text here');
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary'onClick={handleUpClick}>Convert to Uppercase </button>
    </div>
  )
}

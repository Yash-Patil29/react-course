import React from 'react'
// import PropTypes from 'prop-types'

function About(props) {
    let myStyle={
        color:props.mode ==='dark'?'white':'grey',
        backgroundColor:props.mode ==='dark'?'grey':'white',
        border:'2px solid',
        borderColor:props.mode ==='dark'?'white':'grey'
    }
  return (
    <>
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button my-1 mx-1" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Analyze Your text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
            something else.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed my-1 mx-1" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given 
                text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character 
                limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed my-1 mx-1" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It 
                suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>
        </div>
  
    </>
  )
}


export default About


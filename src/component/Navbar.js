import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className={`navbar-brand ${props.mode === 'light' ? 'text-dark' : 'text-light'}`} to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className={`nav-link ${props.mode === 'light' ? 'text-dark' : 'text-light'}`} to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className={`nav-link ${props.mode === 'light' ? 'text-dark' : 'text-light'}`} to="/about">{props.about}</Link>
      </li>
      
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
            </label>
      </div>
  </div>
</nav>
  )
}


/*set types of the Value */
Navbar.prototype={
    
    title:PropTypes.string.isRequired,/*is required used So have set title or will thorw an error */
    about:PropTypes.string
}


/*set default Value */
// Navbar.defaultProps={
//    title:"Set title here",
//    about:"About here"
// }

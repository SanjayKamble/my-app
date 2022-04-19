import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {


  const themeContainerStyle = {
    display:"flex",
    margin:"5px"
  };

const themeStyle1 = {
  backgroundColor:"#660000",
  margin:"5px",
  height:"17px",
  width:"17px",
  borderRadius:"50%",
  border:"1px solid white"
};
const themeStyle2 = {
  backgroundColor:"#006600",
  margin:"5px",
  height:"17px",
  width:"17px",
  borderRadius:"50%",
  border:"1px solid white"
};
const themeStyle3 = {
  backgroundColor:"#000066",
  margin:"5px",
  height:"17px",
  width:"17px",
  borderRadius:"50%",
  border:"1px solid white"
};

const changeTheme1=()=>{
  document.body.style.backgroundColor="#660000";
  document.body.style.color="white";
}
const changeTheme2=()=>{
  document.body.style.backgroundColor="#006600";
  document.body.style.color="white";
}
const changeTheme3=()=>{
  document.body.style.backgroundColor="#000066";
  document.body.style.color="white";
}
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            
            
          </ul>

          {/* theme buttons  */}

          <div className="themes" style={themeContainerStyle}><strong>Themes</strong>
            <div className="theme-1" style={themeStyle1} onClick={changeTheme1}> </div>
            <div className="theme-2" style={themeStyle2} onClick={changeTheme2}> </div>
            <div className="theme-3" style={themeStyle3} onClick={changeTheme3}> </div>
          </div>
          {/* Button for dark mode */}

          <div className={`form-check form-switch ${props.textColor}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Dark mode</label>
          </div>

          {/* Search area */}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success " type="submit" >Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "set about us here"
}
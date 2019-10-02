import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Nav= () => {
  const navStyle = {
		color: "white"
	};
  
  return(
    <nav className='nav-bar'>
      <h3 className='title'>Amazing Movie App</h3>
      <ul className='nav-links'>
        <Link to='/' style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to='/about' style={navStyle}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;
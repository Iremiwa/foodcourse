import React from 'react';
import '../Styles/Navbar.css';
import heart from '../Images/heart.png'
import {Link} from 'react-router-dom';

function Navbar() {

    return(
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <a className="navbar-brand"  id="logo">
          <img src={heart} alt="logo" id="logoicon" />FoodCourse
          </a>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div id="button">
            <Link to="/signin"><button className="btn btn-outline-danger my-2 my-sm-0 " type="submit">Sign In</button></Link>
            <Link to="/register"><button className="btn btn-danger my-2 my-sm-0" type="submit">Register</button></Link>
          </div>
        </div>
      </nav>
        
    )
}


export default Navbar;
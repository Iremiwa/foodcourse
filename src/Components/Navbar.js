import React from 'react';
import '../Styles/Navbar.css';

function Navbar() {

    return(
        
<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <a className="navbar-brand" href="#" id="logo">FoodCourse</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <div id="button">
      <button className="btn btn-outline-danger my-2 my-sm-0 " type="submit">Sign In</button>
      <button className="btn btn-danger my-2 my-sm-0" type="submit">Register</button>
      </div>
  </div>
</nav>
        
    )
}


export default Navbar;
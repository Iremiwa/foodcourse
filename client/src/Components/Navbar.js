import React from 'react';
import '../Styles/Navbar.css';
import heart from '../Images/heart.png'
import {Link} from 'react-router-dom';

function Navbar() {

    return(
        <React.Fragment>
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
                    <div className="menu-item">
                    <ul className="navbar-nav mr-auto">
                    
                    <div className="navbar-buttons"></div>
                    <Link to="/login">
                    <li className="nav-item">
                        <button className="nav-item btn btn-outline-danger my-2 my-sm-0">SignIn <span className="sr-only">(current)</span></button>
                    </li>
                    </Link>
                    <Link to="/register">
                    <li className="nav-item">
                        <button className="nav-item btn btn-danger my-2 my-sm-0">Register <span className="sr-only">(current)</span></button>
                    </li>
                    </Link>
                    </ul>
                    </div>
                </div>
              </nav>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
          <div id="button">
            <div className="nav-item">
            <Link to="/signin"><button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Sign In</button></Link>
            </div>
            
            <div className="nav-item">
            <Link to="/register"><button className="btn btn-danger my-2 my-sm-0" type="submit">Register</button></Link>
            </div>
            </div>
          </div>
        
        </div>
      </nav> */}

      </React.Fragment>   
    )
}


export default Navbar;
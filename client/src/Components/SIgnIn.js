import React from 'react';
import Navbar from './Navbar';
import {Container} from 'react-bootstrap';
import '../Styles/SignIn.css';
import {Link} from 'react-router-dom';

function SignIn() {
    return(
        <React.Fragment>

            <Navbar />

            <Container>
              <div className="signin-form">
                <form>
                <div className="signin-text">
                 <h2>Login</h2>
                 <p>Welcome back!</p>
                 </div>

                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <Link to="/dashboard">
                    <button type="submit" className="btn btn-danger btn-lg btn-block" id="signin-button">Sign In</button>
                  </Link>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" defaultChecked/>
                    <label className="form-check-label" for="exampleCheck1">Remember Me?</label>

                    <a href="#" id="forgot-password">Forgot Password?</a>
                  </div>
                  
                  
                  <div id="continue-buttons">
                  <button type="submit" className="btn btn-light btn-lg btn-block" >Continue with Google</button>
                  <button type="submit" className="btn btn-primary btn-lg btn-block" >Continue with Facebook</button>
                  </div>

                  <p>Haven't enrolled yet? <Link to="/register"><a id="signup">Sign up here</a></Link></p>
                </form>
              </div>
            </Container>

        </React.Fragment>
    );
}

export default SignIn;
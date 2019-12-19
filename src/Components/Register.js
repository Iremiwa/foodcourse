import React from 'react';
import Navbar from './Navbar';
import {Container} from 'react-bootstrap';
import '../Styles/Register.css';

function Register() {
    return(
        <React.Fragment>

            <Navbar />

            <Container>
              <div class="enroll-form">
                <form>
                  <h2>Join our class for free</h2>
                  <p>Join to access our curated list of adorable companions</p>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" defaultChecked />
                    <label className="form-check-label" for="exampleCheck1">I agree with terms of use, privacy policy and other conditions.</label>
                  </div>
                  <button type="submit" className="btn btn-danger btn-lg btn-block" id="long-button">Register</button>
                </form>
              </div>
            </Container>

        </React.Fragment>
    );
}

export default Register;
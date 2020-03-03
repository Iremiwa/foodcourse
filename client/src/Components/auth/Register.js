import React from "react";
import Navbar from "../Navbar";
import { Container } from "react-bootstrap";
import "../../Styles/Register.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  
  render() {
    
    return (
      <React.Fragment>
        <Navbar />

        <Container>
          <div className="enroll-form">
            <form noValidate onSubmit={this.onSubmit}>
              <h2>Join our class for free</h2>
              <p>Join to access our curated list of adorable companions</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                
                  id="name"
                  onChange={this.onChange}
                  value={this.state.name}
                 
                  
                />
                
              </div>
              <div className="form-group ">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  
                  placeholder="Email"
                />
                
              </div>
              <div className="form-group ">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={this.onChange}
                  value={this.state.password}
                  
                  placeholder="Password"
                />
                
              </div>
              <div className="form-group ">
                <input
                  type="password"
                  className="form-control"
                  id="password2"
                  onChange={this.onChange}
                  value={this.state.password2}
                  
                  placeholder="Confirm Password"
                />
                
              </div>

              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  defaultChecked
                />
                <label className="form-check-label">
                  I agree with terms of use, privacy policy and other
                  conditions.
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-danger btn-lg btn-block"
                id="long-button"
              >
                Register
              </button>
            </form>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}


export default Register;

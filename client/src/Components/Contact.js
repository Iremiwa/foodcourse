import React from 'react';
import '../Styles/Contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faMapMarkerAlt, faEnvelope, } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    
        return ( 
            <React.Fragment>
                <div className="get-in-touch-section">
                <div className="row">
                        <div className=" col get-in-touch">
                            <h3>GET IN TOUCH</h3>
                            <p>Ea in nisi elit elit sit amet velit. Nulla voluptate culpa id consequat commodo anim elit nisi enim ad. Irure nostrud nisi voluptate est et deserunt.
                            </p>

                            <div className="row"> 
                                <div className="col-md-auto left-col1 " ><FontAwesomeIcon icon={faMapMarkerAlt} color="white" size="lg" /></div>
                                <div className="col right-col1">
                                    <p>Dolor veniam labore consectetur commodo aliqua</p>
                                </div>
                            </div>

                            <div className="row"> 
                                <div className="col-md-auto left-col1" ><FontAwesomeIcon icon={faPhone} color="white" size="lg"  /></div>
                                <div className="col right-col1">
                                    <p>01-23456789</p>
                                </div>
                            </div>

                            <div className="row"> 
                                <div className="col-md-auto left-col1" ><FontAwesomeIcon icon={faEnvelope} color="white" size="lg"  /></div>
                                <div className="col right-col1">
                                    <p>support@foodcourse.com</p>
                                </div>
                            </div>
                            <p>STAY CONNECTED</p>
                            
                        </div>

                        <div className="col say-something">
                            <h3>SAY SOMETHING</h3>

                            <form>
                                <div className="row">
                                    <div className="col">
                                    <label>First Name</label>
                                    <input type="text" className="form-control"  />
                                    </div>
                                    <div className="col">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control"  />
                                    </div>
                                </div>
                                <label>Message</label>
                                <textarea className="form-control" rows="3" /> 
                            </form>
                        </div>
                    
                </div>
                </div>
            </React.Fragment>
         );
    
}
 
export default Contact;
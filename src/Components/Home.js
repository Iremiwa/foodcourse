import React, {Component} from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Instructors from './Instructors';
import Classes from './Classes';
import Contact from './Contact';
import man from '../Images/man.jpg';
import '../Styles/Home.css';
import {Container} from 'react-bootstrap';

class Home extends Component {
    
  render() { 

    return (

      <React.Fragment>

        <Navbar />

          <div id="section1">
            <Carousel />  
          </div>
        

        <div className="row" id="section2">

          <div className="col">
          
            <h2 id="part-text">Why Be a Part?</h2>

            <div className="container">
            <div className="row"> 
              <div className="col-md-auto left-col" >1</div>
              <div className="col right-col">
                <p>Dolor veniam labore consectetur commodo aliqua. Officia magna deserunt elit occaecat 
                  enim minim dolore adipisicing aute eiusmod. Qui proident in cillum sunt do adipisicing
                   ullamco sit ex. 
                </p>
              </div>
            </div>

            <div className="row"> 
              <div className="col-md-auto left-col" >2</div>
              <div className="col right-col">
                <p>Dolor veniam labore consectetur commodo aliqua. Officia magna deserunt elit occaecat 
                  enim minim dolore adipisicing aute eiusmod. Qui proident in cillum sunt do adipisicing
                   ullamco sit ex. 
                </p>
              </div>
            </div>

            <div className="row"> 
              <div className="col-md-auto left-col" >3</div>
              <div className="col right-col">
                <p>Dolor veniam labore consectetur commodo aliqua. Officia magna deserunt elit occaecat 
                  enim minim dolore adipisicing aute eiusmod. Qui proident in cillum sunt do adipisicing
                   ullamco sit ex. 
                </p>
              </div>
            </div>

            </div>
          </div>

          

          <div className="col">
            <img src={man} id="man"></img>     
          </div>
        </div>


        <div className="section3">
          <Container>
            <h2>Popular Classes</h2>
            <p>Join our Classes</p>
            <Classes />
          </Container>
        </div>

        <div className="section4">
          <Container>
            <h2>Top-class Instructors</h2>
            <Instructors />
          </Container>
        </div>

        <div className="section5">
          <Contact />
        </div>

      </React.Fragment>
         );
    }
}
 
export default Home;
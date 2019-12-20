import React, {Component} from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import food1 from '../Images/food1.jpg';
import food2 from '../Images/food2.jpg';
import food3 from '../Images/food3.jpg';
import instructor from '../Images/instructor.jpg';
import instructor1 from '../Images/instructor1.jpg';
import instructor2 from '../Images/instructor2.jpg';
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
          
          <div className="card-deck">
            <div className="card">
              <img src={food2} className="card-img-top class-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img src={food3} className="card-img-top class-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img src={food1} className="card-img-top class-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            
          </div>

          <h2>Top-class Instructors</h2>

          <div className="card-deck">
            <div className="card">
              <img src={instructor1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img src={instructor} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img src={instructor2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          </Container>
        </div>

        <div className="section5">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="..." className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
         );
    }
}
 
export default Home;
import React from 'react';
import instructor from '../Images/instructor.jpg';
import instructor1 from '../Images/instructor1.jpg';
import instructor2 from '../Images/instructor2.jpg';
import '../Styles/Instructors.css';


function Instructors() {
    return(
        <React.Fragment>

        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
         <div class="carousel-item active">  
            <div className="instructors-cards">
                <div className="card-deck">
                    <div className="card">
                    <img src={instructor1} className="card-img-top instructor-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    <div className="card">
                    <img src={instructor} className="card-img-top instructor-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    <div className="card">
                    <img src={instructor2} className="card-img-top instructor-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="carousel-item">  
            <div className="instructors-cards">
                <div className="card-deck">
                    <div className="card">
                    <img src={instructor1} className="card-img-top instructor-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">hi</h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    <div className="card">
                    <img src={instructor} className="card-img-top instructor-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    <div className="card">
                    <img src={instructor2} className="card-img-top instructor-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default Instructors;
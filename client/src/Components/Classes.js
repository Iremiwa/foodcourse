import React from 'react';
import food1 from '../Images/food1.jpg';
import food2 from '../Images/food2.jpg';
import food3 from '../Images/food3.jpg';
import '../Styles/Classes.css';

function Classes() {
    return(
        <React.Fragment>

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
         <div class="carousel-item active">    
            <div className="classes-card">    
                <div className="card-deck">
                    <div className="card ">
                    <img src={food2} className="card-img-top class-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    <div className="card ">
                    <img src={food3} className="card-img-top class-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    <div className="card ">
                    <img src={food1} className="card-img-top class-img" alt="..." />
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
                <div className="classes-card">    
                    <div className="card-deck">
                        <div className="card ">
                        <img src={food2} className="card-img-top class-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                        <div className="card ">
                        <img src={food3} className="card-img-top class-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                        <div className="card ">
                        <img src={food1} className="card-img-top class-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">hi</h5>
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

export default Classes;
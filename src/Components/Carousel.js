import React from 'react';
import food2 from '../Images/food2.jpg';
import food3 from '../Images/food3.jpg';
import clubsandwich from '../Images/clubsandwich.jpg';
import '../Styles/Carousel.css';

function Carousel() {
    return (
        <React.Fragment>
        <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
               
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
               
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="transparent-text-block1 ">
                        <img src={clubsandwich} alt="First Slide" className=" food " />
                        <div  className = "content1">

                        <p>Learn From Top Chefs</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="transparent-text-block1">
                        <img src={food2} alt="Second Slide" className=" food" />
                        <div className="content1">
                        <p>Be a Part of this top quality cooking and learning experience</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="transparent-text-block1">
                        <img src={food3} alt="Third Slide" className=" food" />
                        <div className="content1">
                        <p >Share Your Recipes Live</p>
                        </div>
                        </div>
                    </div>
                </div>
                
                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </React.Fragment>
    );
}

export default Carousel;
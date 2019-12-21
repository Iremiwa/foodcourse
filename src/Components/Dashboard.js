import React from 'react';
import UserNavbar from './UserNavbar';
import Classes from './Classes';
import Instructors from './Instructors';
import '../Styles/Dashboard.css';
import food2 from '../Images/food2.jpg';
import food1 from '../Images/food2.jpg';

function Dashboard() {
    return (
        <React.Fragment>

            <UserNavbar />
       
            <div className="row">
                <div className="col-md-auto" >
            <div id="vertical-nav">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active vertical-nav-item" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link vertical-nav-item" href="#">My Classes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link vertical-nav-item" href="#">Recommended</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link vertical-nav-item" href="#">Highly Rated</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link vertical-nav-item" href="#">Live</a>
                    </li>
                </ul>
                <div className="vertical-nav-section">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active vertical-nav-item" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link vertical-nav-item" href="#">Help</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link vertical-nav-item" href="#">About</a>
                    </li>
                    
                </ul>
                </div>
                </div> 
            </div>

                <div className="col">
                    <div id="main-section">
                    <h3>Start where you left off?</h3>
                            <div class="row">
                                <div class="col">
                                <div className="transparent-text-block">
                                <img src={food2} alt="..." id="foodimg" />
                                <div className="content">
                                <h1>Pan Griled Chicken & Stir-fry Vegetables</h1>
                                <h5>By Adrian Lacoste</h5>
                                </div>
                                </div>
                            </div>
                            <div class="col-4 upcoming-classes">
                                <p id="live-classes">Upcoming Live Classes</p>

                                <div className="row"> 
                                    <div className="col-md-auto " ><img src={food2} alt="..." id="upcoming-img" /></div>
                                    <div className="col ">
                                        <div className="upcoming-right-col">
                                        <p>Dolor veniam labore consectetur </p>
                                        <p>By Rose Lavender</p>
                                        <p>30mins</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"> 
                                    <div className="col-md-auto " ><img src={food2} alt="..." id="upcoming-img" /></div>
                                    <div className="col ">
                                        <div className="upcoming-right-col">
                                        <p>Dolor veniam labore consectetur </p>
                                        <p>By Rose Lavender</p>
                                        <p>30mins</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"> 
                                    <div className="col-md-auto " ><img src={food2} alt="..." id="upcoming-img" /></div>
                                    <div className="col ">
                                        <div className="upcoming-right-col">
                                        <p>Dolor veniam labore consectetur </p>
                                        <p>By Rose Lavender</p>
                                        <p>30mins</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            </div>   
                    </div>
                

            <div>

                <h3 className="dashboard-titles">New and Worth Mentioning</h3>
                <Classes />
            </div>

            <div>
                <h3 className="dashboard-titles">Top Class Instructors</h3>
                <Instructors />
            </div>

            </div>
            </div>

            
        </React.Fragment>
    );
}

export default Dashboard;
import React from 'react';
import '../Styles/LiveStream.css';
import UserNavbar from './UserNavbar';
import Classes from './Classes';
import food2 from '../Images/food2.jpg';


function LiveStream() {
    return (
        <React.Fragment>
            <UserNavbar />
            <div className = "live-container">
                <div className = "row">

                    <div className = "col">
                        <img src={food2} alt="live Video" className="liveVideo" />

                        <div className="aboutClass">
                            <h4>About Class</h4>
                            <p>Commodo proident labore veniam tempor laboris consectetur sit cupidatat amet. Cillum eiusmod aute cupidatat aliqua. Non et nulla cupidatat sint ex nulla exercitation nostrud irure do proident ullamco. Voluptate eiusmod proident elit non incididunt reprehenderit quis duis eu pariatur. Aliquip sunt ullamco tempor ullamco id in proident.</p>

                        </div>
                    </div>

                    <div className = "col-4">
                        <div className="ingredients">
                            <div className="card border-secondary mb-3 live-card" >
                            <div className="card-header bg-transparent border-success">Ingredients List</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Success card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                        </div>

                        <div className="live-comments">
                            <div className="card border-secondary mb-3 live-card" >
                            <div className="card-header bg-transparent border-success">Live Comments</div>
                            <div className="card-body text-success">
                                <h5 className="card-title"></h5>
                                <p className="card-text"></p>
                            </div>
                            <div className="card-footer bg-transparent border-success">Footer</div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />

                <h3>Upcoming Classes</h3>
                <Classes />
            </div>
            
        </React.Fragment>
    );
}

export default LiveStream;
import React from "react";
import design from './images/design.jpg'
import art from './images/art.jpg'
import clothing from './images/clothing.jpg'
import programming from './images/pro.jpg'

class Cards extends React.Component{
    render() {
        return(
            <>
                <h4 className="center"><b>Popular Services</b></h4>
                <hr/>
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src={design} height={200} />
                                    <span className="card-title">Design</span>
                            </div>
                            <div className="card-content">
                                <p></p>
                            </div>
                            <div className="card-action">
                                <a href="#">get started</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src={art} height={200}/>
                                <span className="card-title">Art</span>
                            </div>
                            <div className="card-content">
                                <p></p>
                            </div>
                            <div className="card-action">
                                <a href="#">get started</a>
                            </div>
                        </div>
                    </div>


                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src={clothing} height={200}/>
                                <span className="card-title">Clothing</span>
                            </div>
                            <div className="card-content">
                                <p></p>
                            </div>
                            <div className="card-action">
                                <a href="#">get started</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src={programming} height={200}/>
                                <span className="card-title">Programming And Web Development</span>
                            </div>
                            <div className="card-content">
                                <p></p>
                            </div>
                            <div className="card-action">
                                <a href="#">get started</a>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }

}

export default Cards
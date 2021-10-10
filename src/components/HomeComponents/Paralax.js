import React from "react";
import img1 from './images/background3.jpg'

class Paralax  extends React.Component{
    render() {
        return(
            <>

                <div id="index-banner" className="parallax-container">
                    <div className="section no-pad-bot">
                        <div className="container">

                                <h1 className="header center teal-text text-lighten-2">S Market</h1>
                                <div className="row center">
                                    <h5 className="header col s12 light">
                                        Find the service you need at any time
                                    </h5>
                                </div>
                                <div className="row center">

                                    <a href="/Register" id="download-button"
                                       className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                                </div>


                        </div>
                    </div>


                    <div className="parallax">
                        <img src={img1} alt="Unsplashed background img 1"/>

                    </div>
                </div>
            </>
        )
    }

}

export default Paralax
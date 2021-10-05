import React from "react";
import whatWeDo from './images/what we do.jpg'
import {MdDone} from 'react-icons/md'

class Description extends React.Component{

    render() {
        return(
            <>


                <div className="row">
                    <div className="col s12 m6">
                        <h4 className="center text-darken-2 teal-text" style={{marginTop: 60}}>What We Do</h4>

                        <div className="container ">
                            <p>
                                <div className="row grey-text" >
                                    S market is an online market place bringing freelancers, businesses and consultants together.
                                    On this platform, as a business or any of the above you will be exposed to various customers, even your regular
                                    customers will be able to rate your services.
                                </div>
                            </p>

                            <p>
                                <div className="row grey-text">
                                    It also helps people to search for services they want easily and compare prices.
                                    if your a customer and you received a bad or good service from a certain business,
                                    this is the place where you will write your critics and rate the service you recieved.
                                </div>
                            </p>
                        </div>
                    </div>

                    <div className="col s12 m6">
                        <img src={whatWeDo}/>
                    </div>
                </div>
            </>
        )
    }

}

export default Description
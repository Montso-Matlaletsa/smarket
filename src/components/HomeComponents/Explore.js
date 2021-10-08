import React from "react";
import services from './services'
import Service from "./ChildComponents/Service";



class Explore extends React.Component{



    render() {

        return(
            <>
                <h4 className="center" style={{marginLeft: 10}}><b>Explore the Services</b></h4>
                <hr/>

                <div className="row" style={{marginTop: 20}}>

                    {
                        services.map((service)=>
                            <Service icon={service.icon} name={service.name}/>
                        )
                    }
                </div>
            </>
        )
    }

}

export default Explore
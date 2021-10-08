import React from "react";


class Service extends React.Component<>{

    render() {
        return(
            <>
                <div className="col s12 m2">
                    <div className="card center">
                        <a href="#">
                            <div className="card-content white-text">
                                <span className="card-title center teal-text"
                                      style={{fontSize: 40}}
                                >
                                    {this.props.icon}
                                </span>
                                <hr style={{border: "1 green"}} className="green"/>
                                <p style={{fontSize: 15}} className="center black-text">{this.props.name}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </>
        )
    }

}

export default Service
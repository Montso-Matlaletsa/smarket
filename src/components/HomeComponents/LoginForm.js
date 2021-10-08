import React from 'react'
import img1 from "./images/background2.jpg";


class LoginForm extends  React.Component{

    render() {

        return(
            <div className="row">

                <div className="col m6 s12">

                    <div id="index-banner" className="parallax-container">

                        <div className="parallax">
                            <img src={img1} alt="Unsplashed background img 1"/>

                        </div>
                    </div>

                </div>

                <div className="col m6 s12">

                    <h4 className="center"><b>Login</b></h4>

                    <div className="container">
                        <form className="col s12 m12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input id="icon_prefix" type="email" className="validate" />
                                    <label htmlFor="icon_email">Email</label>

                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">lock</i>
                                    <input id="icon_password" type="password" className="validate" />
                                    <label htmlFor="icon_password">Password</label>
                                </div>
                            </div>

                            <a class="waves-effect green waves-dark btn col s12">Login</a>
                        </form>
                    </div>

                </div>
            </div>
        )
    }

}

export default LoginForm
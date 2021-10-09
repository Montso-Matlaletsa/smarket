import React from "react";

class Register extends React.Component{
    render() {
        return(
            <div className="container">
                <h4 className="center"><b>Register you business for 30 day trial</b></h4>
                <hr />

                <div id="login-page" className="row">
                    <div className="col s12 z-depth-6 card-panel">
                        <form className="login-form">
                            <div className="row ">
                                <div className="input-field col s12 m6">
                                    <i className="material-icons prefix">business_outline</i>
                                    <input id="business" type="text" />
                                        <label htmlFor="password">Business Name</label>
                                </div>

                                <div className="input-field col s12 m6">
                                    <i className="material-icons prefix">email_outline</i>
                                    <input id="business" type="email" />
                                    <label htmlFor="password">Email</label>
                                </div>
                            </div>


                            <div className="row ">
                                <div className="input-field col s12 m6">
                                    <select>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <label>Materialize Select</label>
                                </div>

                                <div className="input-field col s12 m6">
                                    <i className="material-icons prefix">email_outline</i>
                                    <input id="business" type="email" />
                                    <label htmlFor="password">Email</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12 m12 l12  login-text">
                                    <input type="checkbox" id="remember-me"/>
                                    <label htmlFor="remember-me">Remember me</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <a href="#" className="btn waves-effect waves-light col s12">Login</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6 m6 l6">
                                    <p className="margin medium-small"><a href="#">Register Now!</a></p>
                                </div>
                                <div className="input-field col s6 m6 l6">
                                    <p className="margin right-align medium-small"><a href="#">Forgot password?</a></p>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register
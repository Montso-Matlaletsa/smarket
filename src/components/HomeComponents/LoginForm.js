import React from 'react'
import img1 from "./images/background2.jpg";
import {AiOutlineMail,AiOutlineLock} from 'react-icons/ai'
import { useHistory } from "react-router-dom";


class LoginForm extends  React.Component{



    constructor(props) {
        super(props);
        this.state={
            email : '',
            password: '',
            history : useHistory
        }

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        let user = JSON.parse(localStorage.getItem('user'))
        if(this.state.email !== user.email){
            alert("User doe no exist")
            return
        }

        if(this.state.password !== user.password){
            alert("Wrong Authentication")
            return
        }

        alert("success")
        this.state.history.push({
            path: '/Dashboard',
            data : user
        })
    }

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

                    <div className="container" id="login">
                        <form className="col s12 m12" onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="prefix"><AiOutlineMail /></i>
                                    <input id="icon_prefix" type="email" className="validate" value={this.state.email} onChange={this.onChangeEmail} />
                                    <label htmlFor="icon_email">Email</label>

                                </div>
                                <div className="input-field col s12">
                                    <i className="prefix"><AiOutlineLock/></i>
                                    <input id="icon_password" type="password" className="validate" value={this.state.password} onChange={this.onChangePassword}/>
                                    <label htmlFor="icon_password">Password</label>
                                </div>
                            </div>

                            <button type="submit" class="waves-effect waves-dark btn col s12">Login</button>

                        </form>
                    </div>

                </div>
            </div>
        )
    }

}

export default LoginForm
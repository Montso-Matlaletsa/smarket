import React from "react";
import {AiOutlineMail,AiOutlineLock} from 'react-icons/ai'
import {MdPersonOutline} from 'react-icons/md'

class Register extends React.Component{

    userData;

        constructor(props) {
            super(props);

            this.onChangeUserName = this.onChangeUserName.bind(this)
            this.onChangeEmail = this.onChangeEmail.bind(this)
            this.onChangePassword = this.onChangePassword.bind(this)
            this.onSubmit = this.onSubmit.bind(this)
            this.state ={
                username: '',
                email: '',
                password: ''
            }
        }


    onChangeUserName(e){
            this.setState({username: e.target.value})
    }

    onChangeEmail(e){
        this.setState({email: e.target.value})
    }

    onChangePassword(e){
        this.setState({password: e.target.value})
    }

    onSubmit(e){
            e.preventDefault()
    }

    //component life cycle

    componentDidMount() {
          this.userData = JSON.parse(localStorage.getItem('user'))

        if(localStorage.getItem('user')){
            this.setState({
                username: this.userData.username,
                email: this.userData.email,
                password: this.userData.password
            })
        }else{
            this.setState({
                username:'',
                email:'',
                password:''
            })
        }
    }

    componentWillUpdate(nextProps, nextState ){
            localStorage.setItem('user', JSON.stringify(nextState))
    }


    render() {
        return(
            <div className="container">
                <h4 className="center"><b>Register you business for 30 day trial</b></h4>
                <hr />

                <div id="login-page" className="row">
                    <div className="col s12 m6 z-depth-6 card-panel">
                        <form className="login-form" onSubmit={this.onSubmit}>

                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="prefix"><MdPersonOutline /></i>
                                    <input className="validate" id="email" type="text" value={this.state.username} onChange={this.onChangeUserName} />
                                    <label htmlFor="email" data-error="wrong" data-success="right"
                                           className="center-align">User Name</label>
                                </div>
                            </div>

                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="prefix"><AiOutlineMail /></i>
                                    <input className="validate" id="email" type="email" value={this.state.email} onChange={this.onChangeEmail} />
                                        <label htmlFor="email" data-error="wrong" data-success="right"
                                               className="center-align">Email</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="prefix"><AiOutlineLock /></i>
                                    <input id="password" type="password"  value={this.state.password} onChange={this.onChangePassword}/>
                                        <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <button type="submit" className="btn text-primary waves-effect waves-light col s12">Register</button>
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
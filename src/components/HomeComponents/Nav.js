import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'jquery/dist/jquery.min.map'
import {Link} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return(
            <>
            <div className="navbar-fixed">
                <nav className="navbar-fixed green white-text">
                    <div className="nav-wrapper white-text">
                        <Link to="/" className="brand-logo white-text"><b>S Market</b></Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down ">
                            <li><Link to="/smarket" className="white-text">Home</Link></li>
                            <li><Link to="" className="white-text">Explore</Link></li>
                            <li><Link to="" className="white-text">About Us</Link></li>
                            <li><Link to="" className="white-text">Pricing</Link></li>
                            <li><Link to="#login" className="white-text">Login</Link></li>
                            <li><Link to="/Register" className="waves-effect waves-light btn">Sign Up</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="badges.html" className="white-text">Explore</a></li>
                    <li><a href="badges.html" className="white-text">About Us</a></li>
                    <li><a href="badges.html" className="white-text">Pricing</a></li>
                    <li><a href="collapsible.html" className="white-text">Login</a></li>
                    <li><a className="waves-effect waves-light btn">Sign Up</a></li>
                </ul>

            </>
        )
    }
}

export default Nav
import React from 'react'
import Paralax from "./Paralax";
import Cards from './Cards'
import Description from "./Description";
import Explore from "./Explore";

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import 'jquery/dist/jquery.min.map'

class Nav extends React.Component {
    render() {
        return(
            <>
            <div className="navbar-fixed">
                <nav className="navbar-fixed green white-text">
                    <div className="nav-wrapper white-text">
                        <a href="#!" className="brand-logo white-text"><b>S Market</b></a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down ">
                            <li><a href="badges.html" className="white-text">Explore</a></li>
                            <li><a href="badges.html" className="white-text">About Us</a></li>
                            <li><a href="badges.html" className="white-text">Pricing</a></li>
                            <li><a href="collapsible.html" className="white-text">Login</a></li>
                            <li><a className="waves-effect waves-light btn">Become a seller</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="badges.html">Explore</a></li>
                    <li><a href="collapsible.html">Login</a></li>
                    <li><a className="waves-effect waves-light btn">Become a seller</a></li>
                </ul>


                    <Paralax />
                <br/>
                <br/>
                <Cards />
                <Description />
                <Explore />


            </>
        )
    }
}

export default Nav
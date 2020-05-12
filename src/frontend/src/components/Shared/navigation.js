import React , {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';

class NavigationBar extends Component{

    render(){

        return (
            <nav className="fh5co-nav" role="navigation">
                {/* <div class="top-menu"> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center logo-wrap">
                            <div id="fh5co-logo"><a href="index.html">Tasty<span>.</span></a></div>
                        </div>
                        <div className="col-xs-12 text-center menu-1 menu-wrap">
                            <ul>
                                <li><Link  to={"/home"}>Home</Link></li>
                                <li className="has-dropdown">
                                    <Link   to={"/gallery"}>Gallery</Link>

                                </li>
                                <li><Link  to={"/reservation"}>Reservation</Link></li>
                                <li><Link   to={"/about"}>About</Link></li>
                                <li><Link   to={"/contact"}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>
        );
    }

} export default NavigationBar;
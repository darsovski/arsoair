import React, {Component} from "react";

class Header extends Component {
    render () {
        return (
            <nav className="fh5co-nav" role="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center menu-1 menu-wrap">
                            <ul>
                                <li><Link  to={"/home"}>Home</Link></li>
                                <li><Link  to={"/reservation"}>Reservation</Link></li>
                                <li><Link  to={"/about"}>About</Link></li>
                                <li><Link  to={"/contact"}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
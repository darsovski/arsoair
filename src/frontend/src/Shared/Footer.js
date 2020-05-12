import React,{Component} from "react";

class Footer extends Comment {
    render () {
        return (
            <div className="container">
                <div className="body-box">
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Contact Information</h4>
                                <ul className="fh5co-footer-links">
                                    <li>Ruger Boskovic, <br/>Skopje North Macedonia</li>
                                    <li><a href="tel://2122333">+389 2 21 21 333</a></li>
                                    <li><a href="mailto:info@yoursite.com">info@arsoair.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
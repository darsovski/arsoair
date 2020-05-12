import React,{Component} from "react";

class SuccessReservation extends Component {

    render(){
        return(

            <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{backgroundImage: 'url(images/restaurant.jpg)'}} data-stellar-background-ratio="0.5">
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="display-t js-fullheight">
                                <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                    <h1 >You have successfully reserved</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        );
    }

}export default SuccessReservation
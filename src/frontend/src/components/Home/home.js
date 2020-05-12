import React from "react";


const home = (props) => {

    return(
        <div className="container">
            <div className="jumbotron jumbo-custom">
                <h2>Welcome to ArsoAir Airlines</h2>
            </div>
            <div className="body-box">
                <div className="box-heading">
                    <h4>Please Login or Register as a new user to search and book flights</h4>
                </div>

                <div className="row index-box">
                    <div className="col-sm-6 fa_col">
                        <a href="@{/login}">
                            <i className="btn btn-primary">
                                <span> Login </span>
                            </i>
                        </a>
                    </div>

                    <div className="col-sm-6 fa_col">
                        <a href="@{/registerUser}">
                            <i className="btn btn-primary">
                                <span>Register</span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default home;
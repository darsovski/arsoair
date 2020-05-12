import React , {Component} from 'react';
import LoginBox from "./LoginComponent";
import RegisterBox from "./RegisterComponent";
import "./loginStyles.css";

class RegisterLoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
            loginColor: "orange",
            registerColor:"grey"
        };
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false});

    }

    showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }


    render() {

        return (
            <div>

                <div style={{marginTop:160 ,textAlign:"center"}}>You need to log in before reserving your table! </div>
                <div style={{ marginTop:30, marginLeft:540}}>


                    <div>
                        <div className="box-controller">
                            <div
                                className={"controller " + (this.state.isLoginOpen
                                    ? "selected-controller"
                                    : "")}
                                onClick={this
                                    .showLoginBox
                                    .bind(this)}>
                                Login
                            </div>
                            <div
                                className={"controller " + (this.state.isRegisterOpen
                                    ? "selected-controller"
                                    : "")}
                                onClick={this
                                    .showRegisterBox
                                    .bind(this)}>
                                Register
                            </div>
                        </div>

                    </div>
                    <div className="box-container">
                        {this.state.isLoginOpen && <LoginBox history={this.props.history}/>}
                        {this.state.isRegisterOpen && <RegisterBox history={this.props.history}/>}
                    </div>
                </div>
            </div>
        );
    }
}
export default RegisterLoginContainer;
import React, {Component} from 'react';
import LoginForm from "./LoginForm";

class LoginAdministrator extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div style={{marginTop:160 ,textAlign:"center"}}>Log in as administrator to confirm reservations</div>
                <div style={{ marginTop:30, marginLeft:540}}>
                    <div>
                    </div>
                    <div className="box-container">
                        <LoginForm history={this.props.history}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginAdministrator;
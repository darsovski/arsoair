import React,{Component} from "react";
import axios from "../../custom-axios/axios"
import './loginStyles.css'

class LoginBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            fields: {},
            errors: {},
            administratorEmails: [],
            isAdministrator: false
        };
        this.onLogin = this.onLogin.bind(this)
    }


    handleChange(field, e){
        this.setState({[e.target.name] : e.target.value})
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //Name
        if(!fields["username"]){
            formIsValid = false;
            errors["username"] = "Username cannot be empty";
        }
        else{
            errors["username"]="";
        }
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Password cannot be empty";
        }
        else{
            errors["password"] = "";
        }


        this.setState({errors: errors});
        return formIsValid;
    }

    onLogin(e) {
        if(this.handleValidation()) {
            axios.post("api/user/login", this.state)
                .then(data => {
                    if (!data.data) {
                        alert("Username or password incorrect.")
                    } else {
                        localStorage.setItem('currentUserID', data.data.id)
                        this.props.history.push("/reservation")
                    }
                })
                .catch(error => console.log(error));
        }
    }

    render() {
        const {username,password} = this.state;

        return (
            <div className="inner-container md">
                <div style={{textAlign:"center"}} className="header">
                    Login
                </div>
                <div className="box">

                    <div className="input-group">
                        <label className="login-labels" htmlFor="username" >Username</label>
                        <input
                            type="text"
                            ref="username"
                            name="username"
                            className="login-input"
                            onChange={this.handleChange.bind(this, "username")} value={this.state.fields["username"]}/>
                        <span className="errorMessage" style={{color: "red"}}>{this.state.errors["username"]}</span>

                        {/*onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} //// {this.state.uError ? <div className="errorMessage">Username is required!</div> : null}*/}
                    </div>

                    <div className="input-group">
                        <label className="login-labels" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                        <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["password"]}</span>
                    </div>

                    <button onClick={this.onLogin} style={{float: "right"}}   type="button"
                            className="login-btn">Log in</button>


                </div>
            </div>
        );
    }

}
export default LoginBox;
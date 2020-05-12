import React,{Component} from "react";
import axios from "../../custom-axios/axios"
//import '../LoginUser/loginStyles.css'
import UserRepository from "../../Repository/UserRepository/UserRepository";
import AdministratorRepository from "../../Repository/AdministratorRepository/AdministrationRepository";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
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
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Email cannot be empty";
        }
        else{
            errors["email"]="";
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
            AdministratorRepository.loginAdministrator(this.state)
                .then(data => {
                    if (!data.data) {

                        alert("Email or password incorrect.")
                    } else {
                        localStorage.setItem('currentAdminID', data.data.id)
                        this.props.history.push("/administration")
                    }
                })
                .catch(error => console.log(error));
        }
    }

    render() {
        const {email,password} = this.state;

        return (
            <div className="inner-container md">
                <div style={{textAlign:"center"}} className="header">
                    Login
                </div>
                <div className="box">

                    <div className="input-group">
                        <label className="login-labels" htmlFor="email" >Email</label>
                        <input
                            type="text"
                            ref="email"
                            name="email"
                            className="login-input"
                            onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                        <span className="errorMessage" style={{color: "red"}}>{this.state.errors["email"]}</span>

                        {/*onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} //// {this.state.uError ? <div className="errorMessage">Email is required!</div> : null}*/}
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

}export default LoginForm;
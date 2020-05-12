//Register Box
import React,{Component} from "react";
import axios from "../../custom-axios/axios";

class RegisterBox extends Component {

    constructor(props) {
        super(props);
        this.state = {name: "", surname:"",phone:"", email:"" , username: "",pasword:"",
            fields: {},
            errors: {}};
    }

    submitRegister(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            axios.post("api/user/register", this.state)
                .then(data => {
                    if (!data.data) {
                        alert("Registration failed, some fields empty or incorrect!")
                    } else {
                        localStorage.setItem("currentUserID",data.data.id)
                        alert("Registration successful.")
                        this.props.history.push("/reservation")
                    }
                })
                .catch(error => console.log(error));
        }

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
            errors["password"]="";
        }
        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Name cannot be empty";
        }
        else{
            errors["name"]="";
        }
        if(!fields["surname"]){
            formIsValid = false;
            errors["surname"] = "Surname cannot be empty";
        }
        else{
            errors["surname"]="";
        }
        if(!fields["phone"]){
            formIsValid = false;
            errors["phone"] = "Phone cannot be empty";
        }
        else{
            errors["phone"]="";
        }
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Email cannot be empty";
        }
        else{
            errors["email"]="";
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
            else{
                errors["email"] = "";

            }
        }

        this.setState({errors: errors});
        return formIsValid;

    }

    render() {
        return (
            <div className="inner-container">
                <div  style={{textAlign:"center"}}  className="header">
                    Register
                </div>
                <div className="box">

                    <div className="input-group">
                        <label  className="login-labels" htmlFor="name">Name</label>
                        <input type="text" name="name" ref="name" className="login-input" onChange={this.handleChange.bind(this, "name")}/>
                        <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["name"]}</span>
                    </div>


                    <div className="input-group">
                        <label  className="login-labels" htmlFor="Surname">Surname</label>
                        <input type="text" name="Surname" ref="surname" className="login-input"  onChange={this.handleChange.bind(this, "surname")}/>
                        <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["surname"]}</span>
                    </div>


                    <div className="input-group">
                        <label  className="login-labels" htmlFor="phone">Phone</label>
                        <input type="text" name="phone" ref="phone" className="login-input"  onChange={this.handleChange.bind(this, "phone")}/>
                        <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["phone"]}</span>
                    </div>

                    <div className="input-group">
                        <label  className="login-labels" htmlFor="email">Email</label>
                        <input type="text" name="email" ref="email" className="login-input"  onChange={this.handleChange.bind(this, "email")}/>
                        <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </div>

                    <div className="input-group">
                        <label  className="login-labels" ref="username" htmlFor="username" >Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            ref="username" onChange={this.handleChange.bind(this, "username")}/>
                        <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["username"]}</span>
                    </div>




                    <div className="input-group">
                        <label  className="login-labels" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            ref="password"
                            className="login-input"
                            onChange={this.handleChange.bind(this, "password")}/>
                        <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["password"]}</span>
                    </div>
                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitRegister
                            .bind(this)}>Register</button>
                </div>
            </div>
        );
    }
}
export default RegisterBox;
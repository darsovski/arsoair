import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = (props) => {

    return (
            <div>
                <div>
                    {name()}
                    {email()}
                    {message()}
                    {button()}
                    <p><a href="mailto:info@yourdomainname.com" className="btn btn-primary btn-outline">Contact Us</a></p>
                </div>
            </div>
    );

    function name() {
            return (
                <div className="form-group col-md-6">
                    <label htmlFor="your-name" className="col-form-label">Your Name</label>
                    <input type="text" className="form-control" id="your-name" name="yourname"
                           required="true"/>
                </div>
            );
    }


    function email() {
        return (
            <div className="form-group col-md-6">
                <label htmlFor="your-email" className="col-form-label">Your Email</label>
                <input type="email" className="form-control" id="your-email" name="yourname"
                       required="true"/>
            </div>
        );
    }


    function message() {
        return (
            <div className="form-group col-md-6">
                <label htmlFor="message">Your Message</label>
                <textarea name id="message" cols={50} rows={20} className="form-control" defaultValue={""}/>
            </div>
        );
    }

    function button() {
        return (
            <div className="row">
                <div className="col-md-6 mt-5">
                    <input type="submit" className="btn btn-primary" value="Register"/>
                </div>
            </div>
        );
    }

/*    render() {
        return (
                <div className="container">
                    <div className="body-box">
                        <div className="container my-5">
                            <h2 className="mb-5">Contact</h2>
                            <br>
                                <form>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="your-name" className="col-form-label">Your Name</label>
                                        <input type="text" className="form-control" id="your-name" name="yourname"
                                               required="true"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="your-email" className="col-form-label">Your Email</label>
                                        <input type="email" className="form-control" id="your-email" name="yourname"
                                               required="true"/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="message">Your Message</label>
                                        <textarea name id="message" cols={50} rows={20} className="form-control" defaultValue={""}/>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mt-5">
                                            <input type="submit" className="btn btn-primary" value="Register"/>
                                        </div>
                                    </div>

                                    <p><a href="mailto:info@yourdomainname.com" className="btn btn-primary btn-outline">Contact Us</a></p>
                                </form>
                        </div>
                    </div>
        )*/
};

export default Contact
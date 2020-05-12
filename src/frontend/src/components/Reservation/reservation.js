import React, {Component} from "react";
import axios from "../../custom-axios/axios"
import UserRepository from "../../Repository/UserRepository/UserRepository";
import CheckBox from "../../Shared/CheckBox/CheckBox";
import FlightRepository from "../../Repository/FlightRepository/FlightRepository";
import './Reservation.css'
import Footer from "../../Shared/Footer";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


class Reservation extends Component {

    getAllFlight(){
        let flightList = [];
        FlightRepository.fetchAllFlights().then((data) => {
                for (let i =0; i<data.data.length; i++) {
                    let flight = {"flightNumber": data.data[i].id, "operatingAirlines" : data.data[i].operatingAirlines,
                        "departureCity": data.data[i].departureCity,"arrivalCity": data.data[i].arrivalCity,
                        "dateOfDeparture": data.data[i].dateOfDeparture,"estimatedDepartureTime":data.data[i].estimatedDepartureTime}
                    flightList[i] = flight;
                };
            }
        )
        return flightList;
    }

    constructor(props) {
        super(props);

        this.state = {
            time: "",
            numberPeople: "",
            user:"",
            welcomeMessage:"",
            flight: this.getAllFlight(),
            reservedFlight:[],
            fields: {},
            errors: {},
            errorInNumberOfPeople: false,
            day: new Date(),
        };
        this.onLogout = this.onLogout.bind(this)
    }

    componentDidMount() {
        const currentUserId = localStorage.getItem("currentUserID");
        this.setState(
            {
                flight: this.getAllFlight()
            }
        )
        if(currentUserId!=null) {
            UserRepository.findUserById(currentUserId).then((data) => {

                this.setState({
                    user: data.data,
                    welcomeMessage: "Make your reservation"
                });
            });
        }
    }

    submitReservation = (e)=> {
        e.preventDefault();
        if (this.handleValidation()) {

            let flight = this.state.flight;
            let flightItem = null;
            let reservedFlight = this.state.reserverFlight
            for (let i = 0; i < flight.length; i++) {
                flightItem = {
                    "flightNumber": flight[i].flightNumber,
                    "operatingAirlines": flight[i].operatingAirlines,
                    "departureCity": flight[i].departureCity,
                    "arrivalCity": flight[i].arrivalCity,
                    "dateOfDeparture": flight[i].dateOfDeparture,
                    "estimatedDepartureTime": flight[i].estimatedDepartureTime
                }
                if (flight[i].isChecked) {
                    reservedFlight.push(flight[i])
                }
            };


            this.setState(
                {
                    reservedFlight: reservedFlight
                }
            )

            axios.post("api/reservation/create", this.state)
                .then(data => {
                        if (data.data == "CREATED") {
                            this.props.history.push("/success")
                        }
                        else{
                            alert("Slot is occupied");
                        }
                    }
                )
                .catch(error => console.log(error));

        }
    }
    handleCheckChieldElement = (event) => {
        let flight = this.state.flight
        flight.forEach(flightItem => {
            if (flightItem.value === event.target.value)
                flightItem.isChecked =  event.target.checked
        })
        this.setState({flight: flight})
    }


    changeValue (field, e){
        this.setState({[e.target.flightNumber] : e.target.value})
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    onLogout(){
        localStorage.clear();
        this.props.history.push("/reservation")
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["day"]){
            formIsValid = false;
            errors["day"] = "You must enter the date.";
        }
        else if(fields["day"]<Date.now()) {
            formIsValid = false;
            errors["day"] = "Cannot choose past dates.";
        }
        else{
            errors["day"]="";
        }

        if(!fields["time"]){
            formIsValid = false;
            errors["time"] = "You must choose the time from the dropdown.";
        }
        else{
            errors["time"]="";
        }


        this.setState({errors: errors});
        return formIsValid && !this.state.errorInNumberOfPeople;

    }
    onChange = day => {
        this.setState({day : new Date(day)})
        let fields = this.state.fields;
        fields['day'] = day;
        this.setState({fields});
    }


    render() {
        const {day,time} = this.state;

        return (

            <div>

                <div  className="fh5co-section">
                    <button onClick={this.onLogout} style={{float: "right",marginRight:"70px"}} type="button" className="btn btn-secondary">Log out</button>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 fh5co-heading animate-box">
                                <h2 style={{marginTop: "30px"}}>{this.state.welcomeMessage}</h2>
                                <div className="row">
                                    <div className="col-md-12">
                                        <form
                                            onSubmit={this.submitReservation} id="form-wrap">
                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="day">Enter the day:</label>
                                                    <Calendar formatMonth className="calendar"
                                                              onChange={this.onChange}
                                                              value={this.state.date}
                                                    />                                                {/*<input type="text" className="form-control" name="day" ref="day"  onChange={this.changeValue.bind(this, "day")}   placeholder="e.g. 12.01.2020" id="day" />*/}
                                                    <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["day"]}</span>

                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="time">Choose the time:</label>

                                                    <select style={{margin: '30px',color: "black",background:"grey"}} ref="time"  onChange={this.changeValue.bind(this, "time")}  id="time" name="time">
                                                        <option value="10:00">14:00</option>
                                                        <option value="12:00">16:00</option>
                                                        <option value="14:00">18:00</option>
                                                        <option value="20:00">20:00</option>
                                                        <option value="24:00">22:00</option>
                                                    </select>
                                                    <input type="text" id="timeHolder" className="form-control"  name="timeHolder"  defaultValue={time}/>
                                                    <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["time"]}</span>

                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="operatingAirlines">Operating Airlines:</label>
                                                    <input type="text" name="operatingAirlines" ref="operatingAirlines"  onChange={this.changeValue.bind(this, "operatingAirlines")}   className="form-control"  id="operatingAirlines" />
                                                    <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["operatingAirlines"]}</span>
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="departureCity">Departure City:</label>
                                                    <input type="text" name="departureCity" ref="departureCity"  onChange={this.changeValue.bind(this, "departureCity")}   className="form-control"  id="operatingAirlines" />
                                                    <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["departureCity"]}</span>
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="arrivalCity">Operating Airlines:</label>
                                                    <input type="text" name="arrivalCity" ref="arrivalCity"  onChange={this.changeValue.bind(this, "arrivalCity")}   className="form-control"  id="arrivalCity" />
                                                    <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["arrivalCity"]}</span>
                                                </div>
                                            </div>
                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="operatingAirlines">Operating Airlines:</label>
                                                    <input type="text" name="operatingAirlines" ref="operatingAirlines"  onChange={this.changeValue.bind(this, "operatingAirlines")}   className="form-control"  id="operatingAirlines" />
                                                    <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["operatingAirlines"]}</span>
                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="day">Enter the day:</label>
                                                    <Calendar formatMonth className="calendar"
                                                              onChange={this.onChange}
                                                              value={this.state.date}
                                                    />
                                                    {/*<input type="text" className="form-control" name="day" ref="day"  onChange={this.changeValue.bind(this, "day")}   placeholder="e.g. 12.01.2020" id="day" />*/}
                                                    <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["day"]}</span>

                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label htmlFor="estimatedDepartureTime">Estimated Departure Time:</label>
                                                    <input type="text" name="estimatedDepartureTime" ref="estimatedDepartureTime"  onChange={this.changeValue.bind(this, "estimatedDepartureTime")}   className="form-control"  id="estimatedDepartureTime" />
                                                    <span className="errorMessage"  style={{color: "red"}}>{this.state.errors["estimatedDepartureTime"]}</span>
                                                </div>
                                            </div>

                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <label >Choose flight to reserve:</label>
                                                    <hr/>
                                                    {
                                                        this.state.flight.map((flightItem) => {
                                                            return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...flightItem} />)
                                                        })
                                                    }

                                                </div>
                                            </div>


                                            <div className="row form-group">
                                                <div className="col-md-12">
                                                    <input style={{float:"right"}}type="submit"  className="btn btn-primary btn-outline btn-lg" defaultValue="Submit Form" />
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }

}export default Reservation;
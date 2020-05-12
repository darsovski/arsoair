import React, {Component} from 'react'
import {useHistory} from 'react-router-dom';
import Calendar from "react-calendar";

const AddFlight = (props) => {

    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newTerm = {
            "flightNumber": e.target.flightNumber.value,
            "operatingAirlines": e.target.operatingAirlines.value,
            "departureCity": e.target.departureCity.value,
            "arrivalCity": e.target.arrivalCity.value,
            "dateOfDeparture": e.target.dateOfDeparture.value,
            "estimatedDepartureTime": e.target.estimatedDepartureTime.value
        };
        props.onNewTermAdded(newTerm);
        history.push("/api/flights/create");
    }

    render() {
    return (
        <div>
            <div className="card-body">
                <div className="card-text">
                    <div className="consultations">
                        <form onSubmit={onFormSubmit}>

                            <div className="form-group col-md-6">
                                <label htmlFor="flightNumber" className="col-form-label">Flight Number</label>
                                <input type="text" className="form-control" id="flightNumber" name="flightNumber"/>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="operatingAirlines" className="col-form-label">Operating Airlines</label>
                                <input type="text" className="form-control" id="operatingAirlines" name="operatingAirlines"/>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="departureCity" className="col-form-label">Departure City</label>
                                <input type="text" className="form-control" id="departureCity" name="departureCity"/>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="arrivalCity" className="col-form-label">Arrival City</label>
                                <input type="text" className="form-control" id="arrivalCity" name="arrivalCity"/>
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="estimatedDepartureTime" className="col-form-label">Date of Departure</label>
                                <input type="text" className="form-control" id="dateOfDeparture" name="dateOfDeparture"/>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-6 font-weight-bold"> Day:</div>
                                <div className="col-md-6">
                                    <select name={"dayOfWeek"} className="form-control">
                                        <option value={"MONDAY"}>Monday</option>
                                        <option value={"TUESDAY"}>Tuesday</option>
                                        <option value={"WEDNESDAY"}>Wednesday</option>
                                        <option value={"THURSDAY"}>Thursday</option>
                                        <option value={"FRIDAY"}>Friday</option>
                                        <option value={"SATURDAY"}>Saturday</option>
                                        <option value={"SUNDAY"}>Sunday</option>
                                    </select>

                                    <div className="col-md-6 font-weight-bold"> Time:</div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <input name={"from"} type="text"
                                                       className="form-control"
                                                       pattern="\d\d:?\d\d"
                                                       title="Time from"/>
                                            </div>
                                            <div className="col-md-2 text-center">
                                                -
                                            </div>
                                            <div className="col-md-5 text-right">
                                                <input name={"to"} type="text"
                                                       pattern="\d\d:?\d\d"
                                                       className="form-control"
                                                       title="Time to"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-6 font-weight-bold"> Estimate Departure:</div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <input name={"from"} type="text"
                                                   className="form-control"
                                                   pattern="\d\d:?\d\d"
                                                   title="Time from"/>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            -
                                        </div>
                                        <div className="col-md-5 text-right">
                                            <input name={"to"} type="text"
                                                   pattern="\d\d:?\d\d"
                                                   className="form-control"
                                                   title="Time to"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 text-right">
                                <button type="submit" className="btn btn-primary" title="Add Flight">
                                    <i className="fa fa-fw fa-save"></i> Add Flight
                                </button>
                            </div>
                        </form>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFlight
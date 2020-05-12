import React, {Component} from 'react';
import Moment from "react-moment";
import {Link} from "react-router-dom";

class FlightTerm extends Component {

    render() {
        return (
            <div className={this.props.colClass}>
                <div className="card">
                    <div className="consultations">
                        {this.flightHeader()}
                        {this.dateOfDeparture()}
                        {this.estimateTime()}
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }


    flightHeader() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        {this.props.term.flight.flightNumber}  {this.props.term.flight.departureCity} {this.props.term.flight.arrivalCity}
                    </div>
                    <div className="col-md-6 text-right">
                        <a href="#" className="btn btn-light" title="Следи">
                            <i className="fa fa-star"></i>
                        </a>
                        <a onClick={()=>this.props.onDelete(this.props.slotId)} className="btn btn-danger" title="Избриши">
                            <i className="fa fa-trash"></i>
                        </a>
                    </div>
                </div>
            </div>);
    }


    dateOfDeparture() {
        if (this.props.term.dayOfWeek) {
            return (
                <div className="row">
                    <div className="col-md-6 font-weight-bold"> Ден:</div>
                    <div className="col-md-6">{this.props.term.date.day}</div>
                </div>
            );
        } else if (this.props.term.date) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6 font-weight-bold">Датум:</div>
                        <div className="col-md-6"><Moment
                            format="DD/MM/YYYY">{this.props.term.date}</Moment></div>
                    </div>
                </div>
            );
        } else {
            return null
        }
    }

    estimateTime() {
        return (
            <div className="row">
                <div className="col-md-6 font-weight-bold">Време:</div>
                <div className="col-md-6">
                    <Moment format={"hh:mm"} parse={"hh:mm:ss"}>
                        {this.props.term.estimatedDepartureTime}
                    </Moment>
            </div>
        );
    }

}


export default ConsultationTerm;
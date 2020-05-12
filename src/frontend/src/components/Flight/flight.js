import React from "react";
import Calendar from "react-calendar";

const flight =(props) => {

    return (
        <div className={props.colClass}>
            <div className="card">
                {cardHeader()}
                <div className="card-body">
                    <div className="card-text">
                        {consultations()}
                    </div>
                </div>
            </div>
        </div>
    )

/*    private String flightNumber;
    private String operatingAirlines;
    private String departureCity;
    private String arrivalCity;
    private Date dateOfDeparture;
    private Timestamp estimatedDepartureTime;*/


    function flightHeader() {
        return (<div className="card-header">
            <div className="row">
                <div className="col-md-6">
                    {props.value.flight.flightNumber}  {props.value.flight.departureCity} {props.value.flight.arrivalCity}
                </div>
                <div className="col-md-6 text-right">
                    <a href="#" className="btn btn-light" title="Следи">
                        <i className="fa fa-star"></i>
                    </a>
                </div>
            </div>
        </div>);
    }

    function flights() {
        return props.value.slots.map(slot =>
            <ConsultationTerm term={slot} key={slot.slotId}/>
        );
    }

};

export default flight;
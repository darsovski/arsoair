package com.wp2020.project.Service;

import com.wp2020.project.Model.Flight;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface FlightService {

        Flight createFlight(String flightNumber, String operatingAirlines , String departureCity, String arrivalCity, Date dateOfDeparture, Timestamp estimatedDepartureTime);

        List<Flight> findAll();

        List<Flight> searchFlight();

        Optional<Flight> flightNumber();

        String deleteByFlightNumber(String flightNumber);

        List<Flight> findByDateOfDeparture(Date departureDate);

        List<Flight> findByArrivalCity(String arrivalCity);

         Optional<Flight> findByFlightNumber(String flightNumber);


}

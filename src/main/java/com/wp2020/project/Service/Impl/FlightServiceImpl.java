package com.wp2020.project.Service.Impl;

import com.wp2020.project.Model.Flight;
import com.wp2020.project.Repository.FlightRepository;
import com.wp2020.project.Service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class FlightServiceImpl implements FlightService {

    @Autowired
    FlightRepository flightRepository;

    @Override
    public Flight createFlight(String flightNumber, String operatingAirlines , String departureCity, String arrivalCity, Date dateOfDeparture, Timestamp estimatedDepartureTime) {
        Flight flight=new Flight(flightNumber,operatingAirlines,departureCity,arrivalCity,dateOfDeparture,estimatedDepartureTime);
        return this.flightRepository.save(flight);
    }

    @Override
    public  List<Flight> findAll() {
        return this.flightRepository.findAll();
    }

    @Override
    public List<Flight> findByDateOfDeparture(Date departureDate) {
        return this.flightRepository.findByDateOfDeparture(departureDate);
    }

    @Override
    public List<Flight> findByArrivalCity(String arrivalCity) {
        return this.flightRepository.findByArrivalCity(arrivalCity);
    }

    @Override
    public List<Flight> searchFlight() {
        return null;
    }

    @Override
    public Optional<Flight> flightNumber() {
        return Optional.empty();
    }

    @Override
    public Optional<Flight> findByFlightNumber(String flightNumber) {
       return this.flightRepository.findByFlightNumber(flightNumber);
    }

    @Override
    public String deleteByFlightNumber(String flightNumber) {
        return this.flightRepository.deleteByFlightNumber(flightNumber);
    }
}

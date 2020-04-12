package com.wp2020.project.Repository;

import com.wp2020.project.Model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface FlightRepository extends JpaRepository<Flight,Long> {

    /*@Query("SELECT f from Flight as  f WHERE   f.departureCity=:departureCity and " +
            "                                  f.arrivalCity=:arrivalCity and " +
            "                                  f.dateOfDeparture=:departureDate")
    List<Flight> findFlights(@Param("departureCity") String from ,
                             @Param("arrivalCity") String to,
                             @Param("dateOfDeparture") Date departureDate);*/

    List<Flight> findByDateOfDeparture(Date departureDate);
    List<Flight> findByArrivalCity(String arrivalCity);
    Optional<Flight> findByFlightNumber(String flightNumber);
    String deleteByFlightNumber(String flightNumber);
    List<Flight> findAll();

}

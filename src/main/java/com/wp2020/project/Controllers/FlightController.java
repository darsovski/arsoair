package com.wp2020.project.Controllers;

import com.wp2020.project.Model.Flight;
import com.wp2020.project.Service.FlightService;
import com.wp2020.project.Service.Impl.FlightServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/flights")
public class FlightController {


     private final FlightService flightService;

     public FlightController(FlightService flightService) {
         this.flightService=flightService;
     }

/*    @GetMapping("/")
    public String getHomePage(HttpServletResponse res, HttpServletRequest req) {
        return "index";
    }*/
    @GetMapping
    public String getFLightForm() {
        return "flights/addFlight";
    }


    @PostMapping("/{flightNumber}/delete")
    public String deleteFlight(@PathVariable String flightNumber) {
        return this.flightService.deleteByFlightNumber(flightNumber);
    }

    @PostMapping("/create")
    public String createFlight(@RequestParam String flightNumber,
                               @RequestParam String operatingAirlines,
                               @RequestParam String departureCity,
                               @RequestParam String arrivalCity,
                               @RequestParam Date dateOfDeparture,
                               @RequestParam Timestamp estimatedDepartureTime ) {
        this.flightService.createFlight(flightNumber,operatingAirlines,departureCity,arrivalCity,dateOfDeparture,estimatedDepartureTime);
        return "redirect:/flights";
    }

    @GetMapping("/showAllFlight")
    public List<Flight> getAllFlights() {
        return this.flightService.findAll();
    }



}

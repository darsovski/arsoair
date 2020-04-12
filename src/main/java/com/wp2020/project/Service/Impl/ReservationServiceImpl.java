package com.wp2020.project.Service.Impl;


import com.wp2020.project.Dto.ReservationRequest;
import com.wp2020.project.Model.Exceptions.FlightNotFound;
import com.wp2020.project.Model.Flight;
import com.wp2020.project.Model.Passenger;
import com.wp2020.project.Model.Reservation;
import com.wp2020.project.Repository.FlightRepository;
import com.wp2020.project.Repository.PassengerRepository;
import com.wp2020.project.Repository.ReservationRepository;
import com.wp2020.project.Service.ReservationService;
import com.wp2020.project.Util.PdfGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService {

    private String ITINERARY_DIR;

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private PassengerRepository passengerRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private PdfGenerator pdfGenerator;


  /*  @Autowired
    private EmailUtil emailUtil;
*/

    @Override
    public Reservation bookFlight(ReservationRequest reservationRequest) {

        Long flightId=reservationRequest.getFlightId();
        Optional<Flight> flightOptional=flightRepository.findById(flightId);
        if (!flightOptional.isPresent()) {
            throw new FlightNotFound("No flight found with id "+flightId);
        }
        Flight flight=flightOptional.get();
        Passenger passenger=new Passenger();
        passenger.setFirstName(reservationRequest.getPassengerFirstName());
        passenger.setMiddleName(reservationRequest.getPassengerMiddleName());
        passenger.setLastName(reservationRequest.getPassengerLastName());
        passenger.setEmail(reservationRequest.getPassengerEmail());
        passenger.setPhone(reservationRequest.getPassengerPhone());

        passengerRepository.save(passenger);

        Reservation reservation=new Reservation();
        reservation.setFlight(flight);
        reservation.setPassenger(passenger);
        reservation.setCheckedin(false);
        final Reservation savedReservation = reservationRepository.save(reservation);


        String filePath = ITINERARY_DIR + savedReservation.getId() + ".pdf";
        pdfGenerator.generateItenary(savedReservation,filePath);

        //emailUtil.sendItenary("dlulla@akamai.com",filePath);
        return savedReservation;
    }

    @Override
    public Reservation updateReservation(ReservationRequest reservationRequest) {
        return null;
    }

    @Override
    public void deleteById(Long id) {
        this.reservationRepository.deleteById(id);
    }
}

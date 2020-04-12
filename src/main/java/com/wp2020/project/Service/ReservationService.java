package com.wp2020.project.Service;

import com.wp2020.project.Dto.ReservationRequest;
import com.wp2020.project.Model.Reservation;

public interface ReservationService {

    public Reservation bookFlight(ReservationRequest reservationRequest);
    public Reservation updateReservation(ReservationRequest reservationRequest);
    void deleteById(Long id);

}

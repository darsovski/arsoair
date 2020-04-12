package com.wp2020.project.Controllers;

import com.wp2020.project.Dto.ReservationRequest;
import com.wp2020.project.Service.Impl.ReservationServiceImpl;
import com.wp2020.project.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReservationController {


    ReservationRequest reservationRequest;


    @Autowired
    ReservationServiceImpl reservationService;


    @GetMapping("/reservation")
    public String getReservationForm() {
        return "reservation/completeReservation";
    }


}

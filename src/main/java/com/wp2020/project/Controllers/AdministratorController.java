package com.wp2020.project.Controllers;


import com.wp2020.project.Dto.LoginAdministrator;
import com.wp2020.project.Model.Administrator;
import com.wp2020.project.Model.Reservation;
import com.wp2020.project.Service.AdministratorService;
import com.wp2020.project.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;


import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.List;

@RestController
/*
@CrossOrigin(origins = "http://localhost:3000")
*/
@RequestMapping(value = "/api/administrator",produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class AdministratorController {

    @Autowired
    ReservationService reservationService;
    @Autowired
    JavaMailSender javaMailSender;
    @Autowired
    private AdministratorService administratorService;

    @PostMapping(path = "/approve/{id}")
    public String approveReservation(@PathVariable(name = "id") Long idRes) throws MessagingException {
        Reservation reservation = new Reservation();
        reservation = this.reservationService.findById(idRes).orElse(null);
        if (reservation!= null) {
            String to = reservation.getUser().getEmail();
            String day = reservation.getDay();
            String  time = reservation.getTime();
            this.sendEmail(to,day,time);
            reservation.setStatus("approved");
            this.reservationService.save(reservation);
            return "APPROVED";
        }
        return "FAILED";
    }

    public void sendEmail(String to, String day, String time) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        helper.setFrom("darsovski97@gmail.com");
        helper.setTo(to);
        helper.setText("Your reservation has been approved! Date: " + day + " Time: " +  time +". We are happy to see you! Best regards!" );
        helper.setSubject("Reservation approval!");
        javaMailSender.send(message);
    }

    @GetMapping("/adminemails")
    public List<String> getAllEmails () { return this.administratorService.getAllEmails(); }

    @PostMapping("/adminlogin")
    public Object loginAdmin(@RequestBody LoginAdministrator loginAdmin) {
        String email = loginAdmin.getEmail();
        Administrator admin = this.administratorService.findByEmail(email);
        if( admin !=null && admin.getPassword().equals(loginAdmin.getPassword()))
            return admin;
        else{
            return null;
        }
    }

}

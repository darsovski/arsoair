/*
package com.wp2020.project.Service.Impl;

import com.wp2020.project.Model.Exceptions.EmailCannotSend;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class MailService {

    @Value("${com.flightreservation.flightreservation.itinerary.email.body}")
    private String EMAIL_BODY = "Please find your Itinerary attached.";

    @Value("${com.flightreservation.flightreservation.itinerary.email.subject")
    private String EMAIL_SUBJECT = "Itinerary for your Flight";

    @Autowired
    private JavaMailSender javaMailSender;



    public void sendItenary(String toAddress,String filePath) {

        MimeMessage message=javaMailSender.createMimeMessage();

        try {
            MimeMessageHelper messageHelper = new MimeMessageHelper(message, true);
            messageHelper.setTo(toAddress);
            messageHelper.setSubject(EMAIL_SUBJECT);
            messageHelper.setText(EMAIL_BODY);
            messageHelper.addAttachment("Itinearary", new File(filePath));
            javaMailSender.send(message);
        } catch (MessagingException e) {
            throw new EmailCannotSend("Cannot send email to adress: " + toAddress);
        }
    }

}
*/

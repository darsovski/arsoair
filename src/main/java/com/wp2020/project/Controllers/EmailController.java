package com.wp2020.project.Controllers;


import com.wp2020.project.Model.Email;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.ModelAndView;

import javax.mail.*;
import javax.mail.internet.*;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;

@Controller
@RequestMapping("/email")
public class EmailController {




    @GetMapping
    public ModelAndView email() {
        return new ModelAndView("email/sendEmail","proba",new Email());
    }

    @RequestMapping("/sendEmail")
    public String submitForm(@ModelAttribute("email") Email email,
                             BindingResult bindingResult, SessionStatus sessionStatus) {

                boolean error=false;

                if(email.getTo().isEmpty()) {
                    bindingResult.rejectValue("to","error.to");
                    error=true;
                }
                if(email.getSubject().isEmpty()) {
                    bindingResult.rejectValue("subject","error.subject");
                    error=true;
                }
                if(email.getMessage().isEmpty()) {
                    bindingResult.rejectValue("message","error.message");
                    error=true;
                }

                if(error) {
                    return "email/sendEmail";
                }

                sessionStatus.setComplete();
                return "email/sendEmail";
    }

    private void sendMail() throws AddressException, MessagingException, IOException {


        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("draganarsovski9@gmail.com", "draganarsovski9");
            }
        });

        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("draganarsovski9@gmail.com", false));

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse("draganarsovski9@gmail.com"));
        msg.setSubject("TICKET");
        msg.setContent("YOUR FLIGHT", "text/html");
        msg.setSentDate(new Date());

        MimeBodyPart messageBodyPart = new MimeBodyPart();
        messageBodyPart.setContent("ARSOAIR", "text/html");

        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(messageBodyPart);
        MimeBodyPart attachPart = new MimeBodyPart();

        attachPart.attachFile("/var/tmp/image19.png");
        multipart.addBodyPart(attachPart);
        msg.setContent(multipart);
        Transport.send(msg);
    }

}

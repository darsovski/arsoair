package com.wp2020.project.Controllers;

import com.wp2020.project.Model.User;
import com.wp2020.project.Service.SecurityService;
import com.wp2020.project.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UserController {

    @Autowired
    private UserService UserService;

    @Autowired
    private SecurityService SecurityService;

    @Autowired
    private UserValidator userValidator;

    @GetMapping("/login")
    public String getLoginForm() {
        return "login/login";
    }

    @GetMapping("/registerUser")
    public String getRegisterForm() {
        return "login/registerUser";
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public String registration(@ModelAttribute("userForm") User userForm, BindingResult bindingResult, Model model) {
        userValidator.validate(userForm, bindingResult);

        if (bindingResult.hasErrors()) {
            return "login/registerUser";
        }

        UserService.save(userForm);

        SecurityService.autologin(userForm.getFirstName(), userForm.getPassword());

        return "redirect:/flights/addFlights";
    }

    @RequestMapping(value = "/login/login", method = RequestMethod.GET)
    public String login(Model model, String error, String logout) {
        if (error != null)
            model.addAttribute("error", "Your username and password is invalid.");

        if (logout != null)
            model.addAttribute("message", "You have been logged out successfully.");

        return "login";
    }



}

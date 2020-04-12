package com.wp2020.project.Service;

public interface SecurityService {

    String findLoggedInUsername();

    void autologin(String username, String password);
}

package com.wp2020.project.Service;

import com.wp2020.project.Model.Administrator;

import java.util.List;

public interface AdministratorService {

    public List<String> getAllEmails();

    List<Administrator> getAll();

    Administrator findByEmail(String email);
}

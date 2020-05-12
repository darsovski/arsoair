package com.wp2020.project.Service.Impl;

import com.wp2020.project.Model.Administrator;
import com.wp2020.project.Repository.AdministratorRepository;
import com.wp2020.project.Service.AdministratorService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministratorServiceImpl implements AdministratorService {

    private final AdministratorRepository administratorRepository;

    public AdministratorServiceImpl(AdministratorRepository administratorRepository) {
        this.administratorRepository = administratorRepository;
    }

    @Override
    public List<String> getAllEmails() {return this.administratorRepository.getAllEmails(); }

    @Override
    public List<Administrator> getAll() { return this.administratorRepository.findAll();}

    @Override
    public Administrator findByEmail(String email) { return this.administratorRepository.findByEmail(email); }
}

package com.wp2020.project.Repository;

import com.wp2020.project.Model.Administrator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AdministratorRepository extends JpaRepository<Administrator,Long> {

    @Query("select a.email from Administrator a")
    List<String> getAllEmails();

    @Query("select admin from Administrator admin where admin.email = :email")
    Administrator findByEmail(String email);
}

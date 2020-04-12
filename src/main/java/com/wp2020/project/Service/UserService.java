package com.wp2020.project.Service;

import com.wp2020.project.Model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> findByEmail(String email);
    public void deleteUser(Long id);
    List<User> findAllByFirstName(String userName);
    public List<User> getAllUsers();
    User findByUsername(String username);
    void save(User user);
}

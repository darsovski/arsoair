package com.wp2020.project.Repository;

import com.wp2020.project.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    List<User> findByEmail(String email);
    User findByUsername(String username);
    List<User> findAllByFirstName(String userName);
}

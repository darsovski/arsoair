package com.wp2020.project.Repository;

import com.wp2020.project.Model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {

    void deleteById(Long id);

}

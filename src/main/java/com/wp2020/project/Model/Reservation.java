package com.wp2020.project.Model;

import javax.persistence.*;

@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private boolean checkedIn;
    private int numberOfBags;

    @OneToOne
    private Passenger passenger;

    @OneToOne
    private Flight flight;


    public boolean isCheckedin() {
        return checkedIn;
    }

    public void setCheckedin(boolean checkedin) {
        this.checkedIn = checkedin;
    }

    public int getNumberOfBags() {
        return numberOfBags;
    }

    public void setNumberOfBags(int numberOfBags) {
        this.numberOfBags = numberOfBags;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "checkedin=" + checkedIn +
                ", numberOfBags=" + numberOfBags +
                ", passenger=" + passenger +
                ", flight=" + flight +
                '}';
    }
}
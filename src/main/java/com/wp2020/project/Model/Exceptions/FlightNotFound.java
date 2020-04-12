package com.wp2020.project.Model.Exceptions;

public class FlightNotFound extends RuntimeException {
    public FlightNotFound(String msg) {
        super(msg);
    }
}

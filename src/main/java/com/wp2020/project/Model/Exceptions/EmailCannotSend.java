package com.wp2020.project.Model.Exceptions;

public class EmailCannotSend extends RuntimeException {
    public EmailCannotSend(String msg) {
        super(msg);
    }
}

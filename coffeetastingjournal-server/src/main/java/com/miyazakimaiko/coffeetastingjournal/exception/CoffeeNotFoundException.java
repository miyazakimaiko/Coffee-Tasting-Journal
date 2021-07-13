package com.miyazakimaiko.coffeetastingjournal.exception;

public class CoffeeNotFoundException extends RuntimeException {
    public CoffeeNotFoundException(String message) {
        super(message);
    }
}

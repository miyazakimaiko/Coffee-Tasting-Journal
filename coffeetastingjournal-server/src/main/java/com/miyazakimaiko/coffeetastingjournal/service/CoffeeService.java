package com.miyazakimaiko.coffeetastingjournal.service;

import com.miyazakimaiko.coffeetastingjournal.exception.CoffeeNotFoundException;
import com.miyazakimaiko.coffeetastingjournal.model.Coffee;
import com.miyazakimaiko.coffeetastingjournal.repo.CoffeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoffeeService {
    private final CoffeeRepo coffeeRepo;

    @Autowired
    public CoffeeService(CoffeeRepo coffeeRepo) {
        this.coffeeRepo = coffeeRepo;
    }

    public Coffee addCoffee(Coffee coffee) {
        return coffeeRepo.save(coffee);
    }

    public List<Coffee> findAllCoffees() {
        return coffeeRepo.findAll();
    }

    public Coffee updateCoffee(Coffee coffee) {
        return coffeeRepo.save(coffee);
    }

    public Coffee findCoffeeById(Long id) {
        return coffeeRepo.findCoffeeById(id).orElseThrow(() -> new CoffeeNotFoundException("Cannot find coffee with id " + id + "."));
    }

    public void deleteCoffee(Long id) {
        coffeeRepo.deleteCoffeeById(id);
    }
}

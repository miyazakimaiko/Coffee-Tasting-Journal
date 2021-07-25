package com.miyazakimaiko.coffeetastingjournal.service;

import com.miyazakimaiko.coffeetastingjournal.exception.CoffeeNotFoundException;
import com.miyazakimaiko.coffeetastingjournal.model.Coffee;
import com.miyazakimaiko.coffeetastingjournal.repo.CoffeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoffeeService {
    private final CoffeeRepo coffeeRepo;

    @Autowired
    public CoffeeService(CoffeeRepo coffeeRepo) {
        this.coffeeRepo = coffeeRepo;
    }

    @Transactional
    public Coffee addCoffee(Coffee coffee) {
        return coffeeRepo.save(coffee);
    }

    @Transactional
    public List<Coffee> findAllCoffees() {
        return coffeeRepo.findAll();
    }

    @Transactional
    public Coffee updateCoffee(Coffee coffee) {
        return coffeeRepo.save(coffee);
    }

    @Transactional
    public Coffee findCoffeeById(Long id) {
        return coffeeRepo.findCoffeeById(id).orElseThrow(() -> new CoffeeNotFoundException("Cannot find coffee with id " + id + "."));
    }

    @Transactional
    public void deleteCoffee(Long id) {
        coffeeRepo.deleteCoffeeById(id);
    }
}

package com.miyazakimaiko.coffeetastingjournal.repo;

import com.miyazakimaiko.coffeetastingjournal.model.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// JPA = Java Persistence API
public interface CoffeeRepo extends JpaRepository<Coffee, Long> {
    void deleteCoffeeById(Long id);

    Optional<Coffee> findCoffeeById(Long id);
}

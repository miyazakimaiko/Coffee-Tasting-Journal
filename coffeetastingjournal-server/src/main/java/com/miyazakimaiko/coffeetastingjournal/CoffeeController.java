package com.miyazakimaiko.coffeetastingjournal;

import com.miyazakimaiko.coffeetastingjournal.model.Coffee;
import com.miyazakimaiko.coffeetastingjournal.service.CoffeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/coffee")
public class CoffeeController {
    private final CoffeeService coffeeService;

    public CoffeeController(CoffeeService coffeeService) {
        this.coffeeService = coffeeService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Coffee>> getAllCoffee() {
        List<Coffee> coffees = coffeeService.findAllCoffees();
        return new ResponseEntity<>(coffees, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Coffee> getCoffeeById(@PathVariable("id") Long id) {
        Coffee coffee = coffeeService.findCoffeeById(id);
        return new ResponseEntity<>(coffee, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Coffee> addCoffee(@RequestBody Coffee coffee) {
        Coffee newCoffee = coffeeService.addCoffee(coffee);
        return new ResponseEntity<>(newCoffee, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Coffee> updateCoffee(@RequestBody Coffee coffee) {
        Coffee updateCoffee = coffeeService.updateCoffee(coffee);
        return new ResponseEntity<>(updateCoffee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCoffee(@PathVariable("id") Long id) {
        coffeeService.deleteCoffee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

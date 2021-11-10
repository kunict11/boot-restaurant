package com.example.bootrestaurant.Dish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DishController {

    private final DishRepository dishRepo;

    @Autowired
    public DishController(DishRepository dishRepo) {
        this.dishRepo = dishRepo;
    }

    @GetMapping("/dishes")
    public ResponseEntity<List<Dish>> getAllDishes() {

        return new ResponseEntity<>(dishRepo.findAll(), HttpStatus.OK);
    }

    @GetMapping("/dishes/{id}")
    // I don't think defining the return type as a wildcard is a good idea...
    public ResponseEntity<?> getDishById(@PathVariable Integer id) {
        Optional<Dish> dish = dishRepo.findById(id);
        if(dish.isEmpty()) {
            return new ResponseEntity<>("Dish with given id doesn't exist", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(dish.get(), HttpStatus.OK);
    }
}

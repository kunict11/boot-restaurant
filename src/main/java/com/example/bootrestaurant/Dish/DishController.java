package com.example.bootrestaurant.Dish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
    public Map<DishType, List<Dish>> getAllDishes() {
        List<Dish> dishes = new ArrayList<>();
        dishRepo.findAll().forEach(dishes::add);
        System.out.println(findAllGrouped(dishes));
        return findAllGrouped(dishes);
    }


    private Map<DishType, List<Dish>> findAllGrouped(List<Dish> dishes) {
        return dishes.stream().collect(Collectors.groupingBy(Dish::getDishType));
    }
}

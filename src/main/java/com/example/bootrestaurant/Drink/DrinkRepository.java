package com.example.bootrestaurant.Drink;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DrinkRepository extends CrudRepository<Drink, Integer> {
    List<Drink> findAll();
    List<Drink> findByDrinkType(DrinkType type);
}

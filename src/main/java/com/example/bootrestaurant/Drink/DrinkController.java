package com.example.bootrestaurant.Drink;

import com.example.bootrestaurant.Helpers.EnumConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DrinkController {
    private final DrinkRepository drinkRepository;

    @Autowired
    public DrinkController(DrinkRepository drinkRepository){
        this.drinkRepository = drinkRepository;
    }

    @GetMapping("/drinks")
    public ResponseEntity<List<Drink>> getAllDrinks(){
        return new ResponseEntity<>(drinkRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/drinks/{type}")
    public ResponseEntity<List<Drink>> getDrinksByType(@PathVariable DrinkType type){
        return new ResponseEntity<>(drinkRepository.findByDrinkType(type), HttpStatus.OK);
    }

    @InitBinder
    public void initBinder(WebDataBinder binder){
        binder.registerCustomEditor(DrinkType.class, new EnumConverter<>(DrinkType.class));
    }
}

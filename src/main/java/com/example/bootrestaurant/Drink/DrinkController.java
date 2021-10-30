package com.example.bootrestaurant.Drink;

import com.example.bootrestaurant.Helpers.EnumConverter;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Drink> getAllDrinks(){
        return drinkRepository.findAll();
    }

    @GetMapping("/drinks/{type}")
    public List<Drink> getDrinksByType(@PathVariable DrinkType type){
        return drinkRepository.findByDrinkType(type);
    }

    @InitBinder
    public void initBinder(WebDataBinder binder){
        binder.registerCustomEditor(DrinkType.class, new EnumConverter<>(DrinkType.class));
    }
}

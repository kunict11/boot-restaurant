package Dish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/dish")
public class DishController {

    private DishRepository dishRepo;

    @Autowired
    public DishController(DishRepository dishRepo) {
        this.dishRepo = dishRepo;
    }

}

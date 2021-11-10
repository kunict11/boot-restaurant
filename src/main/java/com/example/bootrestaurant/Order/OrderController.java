package com.example.bootrestaurant.Order;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
    private final OrderRepository repo;

    public OrderController(OrderRepository repo) {
        this.repo = repo;
    }

    @PostMapping(value = "/orders",
                 consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> makeOrder(@RequestBody Order order) {
        repo.save(order);

        return new ResponseEntity<>("You have successfully made an order.", HttpStatus.CREATED);
    }
}

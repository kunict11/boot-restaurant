package com.example.bootrestaurant.Order;

import com.example.bootrestaurant.Dish.Dish;
import com.example.bootrestaurant.Drink.Drink;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String customerName;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    @ManyToMany(targetEntity = Dish.class, cascade = CascadeType.MERGE)
    private List<Dish> dishes = new ArrayList<>();

    @Column
    @ManyToMany(targetEntity = Drink.class, cascade = CascadeType.MERGE)
    private List<Drink> drinks = new ArrayList<>();

    public Integer getId() {
        return id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Dish> getDishes() {
        return dishes;
    }

    public void setDishes(List<Dish> dishes) {
        this.dishes = dishes;
    }

    public List<Drink> getDrinks() {
        return drinks;
    }

    public void setDrinks(List<Drink> drinks) {
        this.drinks = drinks;
    }
}

package com.example.bootrestaurant.Reservation;

import com.example.bootrestaurant.SeatingArrangement.SeatingArrangement;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private String customerName;

    @OneToOne
    private SeatingArrangement table;

    @Column(nullable = false)
    private LocalDateTime dateTime;

    public int getId() {
        return id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public SeatingArrangement getTable() {
        return table;
    }

    public void setTable(SeatingArrangement table) {
        this.table = table;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}

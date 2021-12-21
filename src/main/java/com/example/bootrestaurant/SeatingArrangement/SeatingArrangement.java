package com.example.bootrestaurant.SeatingArrangement;

import com.example.bootrestaurant.Reservation.Reservation;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Seating_Arrangement")
public class SeatingArrangement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private int seatsAtTable;

    @Column(nullable = false)
    private int availableTables;

    @OneToMany(mappedBy = "table")
    private List<Reservation> reservations;

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservation) {
        this.reservations = reservation;
    }

    public int getId() {
        return id;
    }

    public int getSeatsAtTable() {
        return seatsAtTable;
    }

    public void setSeatsAtTable(int seatsAtTable) {
        this.seatsAtTable = seatsAtTable;
    }

    public int getAvailableTables() {
        return availableTables;
    }

    public void setAvailableTables(int availableTables) {
        this.availableTables = availableTables;
    }
}

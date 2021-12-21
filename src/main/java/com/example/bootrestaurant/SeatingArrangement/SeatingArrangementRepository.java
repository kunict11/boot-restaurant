package com.example.bootrestaurant.SeatingArrangement;

import org.springframework.data.repository.CrudRepository;

public interface SeatingArrangementRepository extends CrudRepository<SeatingArrangement, Integer> {
    SeatingArrangement findDistinctBySeatsAtTable(int seats);
}

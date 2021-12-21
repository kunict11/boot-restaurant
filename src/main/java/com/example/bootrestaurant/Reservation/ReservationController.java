package com.example.bootrestaurant.Reservation;

import com.example.bootrestaurant.SeatingArrangement.SeatingArrangement;
import com.example.bootrestaurant.SeatingArrangement.SeatingArrangementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReservationController {
    private static final int HOURS_SPENT_AT_RESTAURANT = 3;
    private final ReservationRepository reservationRepo;
    private final SeatingArrangementRepository seatingArrRepo;

    @Autowired
    public ReservationController(ReservationRepository reservationRepo, SeatingArrangementRepository seatingArrRepo) {
        this.reservationRepo = reservationRepo;
        this.seatingArrRepo = seatingArrRepo;
    }

    @PostMapping("/reservations")
    public ResponseEntity<String> makeReservation(@RequestBody ReservationRequest r) {
        SeatingArrangement seatingArr = seatingArrRepo.findDistinctBySeatsAtTable(r.getRequestedSeats());
        List<Reservation> reservations = seatingArr.getReservations();
        var reservationsAt = reservations
                .stream()
                .filter(res -> {
                    return res.getDateTime().equals(r.getDateTime()) ||
                           r.getDateTime().isAfter(res.getDateTime()) && r.getDateTime().isBefore(res.getDateTime().plusHours(HOURS_SPENT_AT_RESTAURANT));
                })
                .collect(Collectors.toList());
        if(reservationsAt.size() >= seatingArr.getAvailableTables()) {
            return new ResponseEntity<>("{\"message\": \"Sorry, we are fully booked at this time.\" }", HttpStatus.BAD_REQUEST);
        }
        Reservation newRes = new Reservation();
        newRes.setCustomerName(r.getCustomerName());
        newRes.setDateTime(r.getDateTime());
        newRes.setTable(seatingArr);
        reservationRepo.save(newRes);

        reservations.add(newRes);
        seatingArr.setReservations(reservations);
        seatingArrRepo.save(seatingArr);

        return new ResponseEntity<>("{\"message\": \"You have successfully made a reservation.\" }", HttpStatus.CREATED);
    }

    private static class ReservationRequest {
        private String customerName;
        private LocalDateTime dateTime;
        private int requestedSeats;

        public String getCustomerName() {
            return customerName;
        }

        public void setCustomerName(String customerName) {
            this.customerName = customerName;
        }

        public LocalDateTime getDateTime() {
            return dateTime;
        }

        public void setDateTime(LocalDateTime dateTime) {
            this.dateTime = dateTime;
        }

        public int getRequestedSeats() {
            return requestedSeats;
        }

        public void setRequestedSeats(int requestedSeats) {
            this.requestedSeats = requestedSeats;
        }
    }
}

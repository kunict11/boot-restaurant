import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss', '../../app.component.scss'],
})
export class ReservationComponent implements OnInit {
  numberOfSeats: Array<number> = [2, 4, 6, 8, 10, 12];

  public reservationForm: FormGroup;
  constructor(
    private reservationService: ReservationService,
    private _snack: MatSnackBar
  ) {
    this.reservationForm = new FormGroup({
      customerName: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      dateTime: new FormControl(null, [Validators.required]),
      requestedSeats: new FormControl('', [Validators.required]),
    });
  }
  get customerNameControl() {
    return this.reservationForm.get('customerName');
  }
  get dateTimeControl() {
    return this.reservationForm.get('dateTime');
  }
  get requestedSeatsControl() {
    return this.reservationForm.get('requestedSeats');
  }

  ngOnInit(): void {}

  public openSnackbar(message: string) {
    this._snack.open(message, 'Close');
  }

  public makeReservation() {
    if (this.reservationForm.valid) {
      const formData = this.reservationForm.value;
      console.log(formData);
      const reservation: Reservation = new Reservation(
        formData.customerName,
        formData.dateTime,
        formData.requestedSeats
      );
      console.log(reservation);

      this.reservationService.makeReservation(reservation).subscribe((res) => {
        if (res) {
          this.openSnackbar(res.message);
        }
      });
      return;
    }

    this.openSnackbar('Please fill in all the fields.');
    return;
  }
}

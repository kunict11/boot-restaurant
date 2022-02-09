import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { serverUrl } from '../environment';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly reservationsUrl: string = `${serverUrl}/reservations`;

  constructor(private http: HttpClient) {}

  public makeReservation(
    r: Reservation
  ): Observable<{ message: string } | null> {
    return this.http
      .post<{ message: string } | null>(this.reservationsUrl, {
        customerName: r.name,
        dateTime: r.dateTime,
        requestedSeats: r.nSeats,
      })
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  private handleError(
    error: HttpErrorResponse
  ): Observable<{ message: string }> {
    const serverError: { message: string; status: number; stack: string } =
      error.error;
    return of({ message: serverError.message });
  }
}

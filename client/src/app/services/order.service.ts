import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serverUrl } from '../environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly orderUrl: string = `${serverUrl}/orders`

  constructor(private http: HttpClient) { }

  public makeOrder(order: Order): Observable<string | null> {
    return this.http.post<string | null>(this.orderUrl, { order: order });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../environment';
import { Observable, Subject } from 'rxjs';
import { Dish } from '../models/dish';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly dishUrl = `${serverUrl}/dishes`;

  constructor(private http: HttpClient) { }

  public getAllDishes() : Observable<Dish[]> {
    return this.http
    .get<Dish[]>(this.dishUrl)
    .pipe(
      map((res: Dish[]) => {
        return res.map(dish => this.convertToDish(dish))
      })
    );
  }

  private convertToDish(dishFromServer: any): Dish {
    return new Dish(dishFromServer.id, 
                    dishFromServer.name, 
                    dishFromServer.description, 
                    dishFromServer.dishType, 
                    dishFromServer.price, 
                    dishFromServer.imagePath
                    );
  }
}

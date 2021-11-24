import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../environment';
import { Observable, Subject } from 'rxjs';
import { Dish } from '../models/dish';
import { map, catchError } from 'rxjs/operators';
import { Drink } from '../models/drink';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly dishUrl = `${serverUrl}/dishes`;
  private readonly drinkUrl = `${serverUrl}/drinks`;

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

  public getAllDrinks() : Observable<Drink[]> {
    return this.http
    .get<Drink[]>(this.drinkUrl)
    .pipe(
      map((res: Drink[]) => {
        return res.map(dish => this.convertToDrink(dish))
      })
    );
  }

  private convertToDrink(drinkFromServer: any): Drink {
    return new Drink(drinkFromServer.id, 
                     drinkFromServer.name, 
                     drinkFromServer.details, 
                     drinkFromServer.drinkType, 
                     drinkFromServer.price, 
                     drinkFromServer.imagePath
                    );
  }
}

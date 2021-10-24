import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Dish, DishType } from 'src/app/models/dish';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit, OnDestroy {

  public dishTypes: DishType[] = Object.values(DishType);
  public dishes: Dish[] = [];

  private dishSub: Subscription;

  constructor(public menuService: MenuService) {
    this.dishSub = menuService.getAllDishes().subscribe((res: Dish[]) => {
      this.dishes = res;
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dishSub.unsubscribe();
  }

}

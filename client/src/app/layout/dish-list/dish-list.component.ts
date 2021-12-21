import { Component, OnDestroy, OnInit } from '@angular/core';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Dish, DishType } from 'src/app/models/dish';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit, OnDestroy {
  faFrown = faFrown;

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


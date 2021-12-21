import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Dish, DishType } from 'src/app/models/dish';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  @Input() dish: Dish = {} as Dish;
  
  ngOnInit(): void {
  }

  constructor() {
  }

}

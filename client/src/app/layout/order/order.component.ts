import { Component, OnDestroy, OnInit } from '@angular/core';
import { Dish, DishType } from 'src/app/models/dish';
import { MenuService } from 'src/app/services/menu.service';
import { OrderService } from 'src/app/services/order.service';
import { FormControl, FormGroup, Validators } from '@angular/forms/';
import { Subscription } from 'rxjs';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss', '../../app.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  faWindowClose = faWindowClose;
  public dishTypes: DishType[] = Object.values(DishType);
  public dishes: Dish[] = [];
  public orderedDishes: Dish[] = [];

  public selectedDishType: string = '---';

  dishSub: Subscription = new Subscription();

  public orderForm: FormGroup;

  constructor(private orderService: OrderService, private menuService: MenuService) { 
    this.orderForm = new FormGroup({
      customerName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  ngOnInit(): void {
    this.dishSub = this.menuService.getAllDishes().subscribe((ds: Dish[] | undefined) => {
      if (ds != undefined){
        this.dishes = ds;
      }
    });
  }

  ngOnDestroy(): void {
    this.dishSub.unsubscribe();
  }

  get customerNameControl() { return this.orderForm.get('customerName'); }
  get addressControl() { return this.orderForm.get('address'); }

  public onDishSelectChange(value: string) {
    this.selectedDishType = value;
    console.log(this.selectedDishType);
  }

  public onDishChoiceChange(dish: Dish) {
    this.orderedDishes.push(dish);
    console.log(this.orderedDishes);
  }

  public removeFromOrders(dish: Dish) {
    this.orderedDishes = this.orderedDishes.filter((d) => d.getId() !== dish.getId());
  }

}

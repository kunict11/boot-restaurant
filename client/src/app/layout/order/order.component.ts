import { Component, OnDestroy, OnInit } from '@angular/core';
import { Dish, DishType } from 'src/app/models/dish';
import { MenuService } from 'src/app/services/menu.service';
import { OrderService } from 'src/app/services/order.service';
import { FormControl, FormGroup, Validators } from '@angular/forms/';
import { Subscription } from 'rxjs';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Drink, DrinkType } from 'src/app/models/drink';
import { Order } from 'src/app/models/order';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  public drinkTypes: DrinkType[] = Object.values(DrinkType);
  public drinksIncluded: boolean = false;
  public drinks: Drink[] = [];
  public orderedDrinks: Drink[] = [];

  public selectedDishType: string = '---';
  public selectedDrinkType: string = "";

  dishSub: Subscription = new Subscription();
  drinkSub: Subscription = new Subscription();

  public orderForm: FormGroup;

  constructor(private orderService: OrderService, private menuService: MenuService, private _snack: MatSnackBar) { 
    this.orderForm = new FormGroup({
      customerName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });
  }

  ngOnInit(): void {
    this.dishSub = this.menuService.getAllDishes().subscribe((ds: Dish[] | undefined) => {
      if (ds != undefined){
        this.dishes = ds;
      }
    });
    this.drinkSub = this.menuService.getAllDrinks().subscribe((ds: Drink[] | undefined) => {
      if (ds != undefined) {
        this.drinks = ds;
      }
    });
  }

  ngOnDestroy(): void {
    this.dishSub.unsubscribe();
    this.drinkSub.unsubscribe();
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

  public onSlideToggleChange() {
    this.drinksIncluded = !this.drinksIncluded;
  }

  public onDrinkSelectChange(value: string) {
    this.selectedDrinkType = value;
  }

  public onDrinkChoiceChange(drink: Drink) {
    this.orderedDrinks.push(drink);
  }

  public removeFromDrinks(drink: Drink) {
    this.orderedDrinks = this.orderedDrinks.filter((d) => d.getId() !== drink.getId());
  }

  public openSnackbar(message: string) {
    this._snack.open(message, 'Close');
  }

  public submitOrder() {
    if(this.orderForm.valid) {
      if(this.orderedDishes.length > 0) {
        const formData = this.orderForm.value;
        console.log(formData);
        const order: Order = new Order(formData.customerName, formData.address, this.orderedDishes, this.orderedDrinks);
        console.log(order);

        this.orderService.makeOrder(order).subscribe((res) => {
          if(res) {
            this.openSnackbar(res.message);
          }
        });
        return;
      }

      this.openSnackbar('You have to order at leat one dish.');
      return;
    }

    this.openSnackbar('Please fill in all the fields.');
    return;
  }
}

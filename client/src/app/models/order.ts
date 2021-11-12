import { Dish } from "./dish";
import { Drink } from "./drink";

export class Order {
    constructor(private id: number,
                private customerName: string,
                private address: string,
                private dishes: Array<Dish>,
                private drinks: Array<Drink>) { }
}
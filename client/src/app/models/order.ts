import { Dish } from "./dish";
import { Drink } from "./drink";

export class Order {
    constructor(private _customerName: string,
                private _address: string,
                private _dishes: Dish[],
                private _drinks: Drink[]) { }

    public get name()   : string  { return this._customerName }
    public get address(): string  { return this._address }
    public get dishes() : Dish[]  { return this._dishes }
    public get drinks() : Drink[] { return this._drinks }
}
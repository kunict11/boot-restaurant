export enum DishType {
    ANTIPASTO = "Antipasto",
    PASTA = "Pasta",
    PIZZA = "Pizza",
    SALAD = "Salad",
    DESSERT = "Dessert"
}

export class Dish {
    constructor(private id: Number,
                private name: string,
                private description: string,
                private type: DishType,
                private price: number,
                private imgPath: string) {}

    public getType(): DishType {
        return this.type;
    }

    public getName(): string {
        return this.name;
    }
}
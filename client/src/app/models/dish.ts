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
                private imagePath: string) {}

    public getType(): DishType {
        return this.type;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getId(): Number {
        return this.id;
    }
}
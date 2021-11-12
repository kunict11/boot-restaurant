export enum DrinkType {
    BEER = "Beer",
    WINE = "Wine",
    COCKTAIL = "Cocktail",
    LIQUEUR = "Liqueur",
    COFFEE = "Coffee"
}

export class Drink {
    constructor(private id: Number,
                private name: string,
                private details: string,
                private type: DrinkType,
                private price: number,
                private imagePath: string) {}

    public getType(): DrinkType {
        return this.type;
    }

    public getName(): string {
        return this.name;
    }

    public getDetails(): string {
        return this.details;
    }
}
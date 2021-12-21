import { Pipe, PipeTransform } from '@angular/core';
import { Drink } from 'src/app/models/drink';

@Pipe({
  name: 'filterDrinkByType'
})
export class FilterDrinkByTypePipe implements PipeTransform {

  transform(drinks: Drink[], type: string): Drink[] {

    const drinksCpy: Drink[] = [...drinks];

    return drinksCpy.filter((drink: Drink) => { return drink.getType().toLowerCase() == type.toLowerCase(); });
  }

}

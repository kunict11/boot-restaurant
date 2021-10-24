import { Pipe, PipeTransform } from '@angular/core';
import { Dish } from 'src/app/models/dish';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(dishes: Dish[], type: string): Dish[] {

    const dishesCpy: Dish[] = [...dishes];

    return dishesCpy.filter((dish: Dish) => { return dish.getType().toLowerCase() == type.toLowerCase(); });
  }

}

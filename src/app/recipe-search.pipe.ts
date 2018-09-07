import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeSearch'
})
export class RecipeSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( item => {
      return item.title.toLowerCase().includes(searchText);
    });
  }

}

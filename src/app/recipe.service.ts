import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe;
  recipeList;

  constructor(private http: Http) {
  }

  getRecipeList() {
     return this.http.get('../assets/recipe-list.json');
  }

  getRecipeDetails() {
     return this.http.get('../assets/recipe-list.json');
  }

  addRecipe(recipe: Recipe) {
    // this.http.get('../assets/recipe-list.json')
    //   .subscribe((data) => {
    //     console.log(data.json()['recipes']);
    //   });
    return this.http.post('../assets/recipe-list.json', 'Data is thsi')
    .subscribe((data) => {
      console.log('data added', data);
    });
  }
}

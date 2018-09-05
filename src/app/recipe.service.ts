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
     return this.http.get('http://localhost:1337/recipe/list');
  }

  getRecipeDetails() {
     return this.http.get('http://localhost:1337/recipe/list');
  }

  addRecipe(recipe: Recipe) {
    // this.http.get('http://localhost:1337/recipe/list')
    //   .subscribe((data) => {
    //     console.log(data.json()['recipes']);
    //   });
    console.log('add');
    return this.http.post('http://localhost:1337/recipe/add', recipe)
    .subscribe((data) => {
      console.log('Data : ' , data);
    });

  }
}

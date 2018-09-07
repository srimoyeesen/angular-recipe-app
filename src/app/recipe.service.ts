import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Recipe } from './recipe';
import { Observable, Observer } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe;
  myobserver;
  recipeList = new Subject();
  
  constructor(private http: Http) {
   
  }

  getRecipeList(){
    let list;
    if (localStorage.getItem('recipes')) {
      list = JSON.parse(localStorage.getItem('recipes'));
    } else {
      list = {"recipes":[{"recipe_id":"001","title":"Chicken Soup","description":"Lets talk about this soup","author":"","video_url":"https://www.youtube.com/embed/b-TGpa0SDXw","image_url":"","ingredient_list":["chicken","salt","pepper","spring onions"]},{"recipe_id":"002","title":"Chicken biriyani","description":"Lets talk about this soup","author":"","video_url":"https://www.youtube.com/embed/Bm6UEn3QTfo","image_url":"","ingredient_list":["chicken","rice","salt","onions"]}]};
      localStorage.setItem('recipes', JSON.stringify(list));
    }
     return Observable.create((observer) => {
      observer.next(list);
     })
    
  }

  getRecipeByID(id){
    let list = JSON.parse(localStorage.getItem('recipes'));
    this.selectedRecipe = list['recipes'].find((data) => {
      return data.recipe_id === id;
    });
    return this.selectedRecipe;
  }

  addRecipe(recipe: Recipe) {
    let id = parseInt((Math.random() * 1000).toString());
    let currentList = JSON.parse(localStorage.getItem('recipes'));
    currentList.recipes.push(Object.assign(recipe, {
      recipe_id: id.toString()
    }));
    localStorage.setItem('recipes', JSON.stringify(currentList));
    this.recipeList.next(currentList);
  }

 
}

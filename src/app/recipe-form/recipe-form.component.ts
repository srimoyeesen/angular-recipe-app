import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipe = new Recipe();
  newRecipe = new Recipe();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.recipeService.addRecipe(this.recipe);
  }

}

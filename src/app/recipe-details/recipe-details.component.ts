import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipeID;
  recipeList;
  selectedRecipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeID = this.route.snapshot.params['id'];
    const id = this.recipeID;
    this.recipeService.getRecipeList()
    .subscribe(resNews => {
      this.recipeList = resNews.json()['recipes'];
      this.selectedRecipe = this.recipeList.find((data) => {
        return data.recipe_id === id;
      });
    });
  }

}

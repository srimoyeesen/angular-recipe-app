import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [RecipeService]
})
export class HomeComponent implements OnInit {

  recipeList = [];

  constructor(private _RecipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this._RecipeService.getRecipeList()
    .subscribe(resNews => {
      this.recipeList = resNews.json()['recipes'];
    });
  }

  onAddRecipe() {
    this.router.navigate(['/addRecipe']);
  }

}

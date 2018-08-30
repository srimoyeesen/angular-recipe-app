import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipeItem;
  constructor(private router:  Router) { }

  ngOnInit() {
  }

  onRecipeClick(recipeItem) {
   this.router.navigate(['recipeDetails', recipeItem.recipe_id]);
  }

}

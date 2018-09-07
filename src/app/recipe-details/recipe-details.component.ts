import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { IngredientListComponent } from '../ingredient-list/ingredient-list.component';
import {trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class RecipeDetailsComponent implements OnInit {

  recipeID;
  recipeList;
  selectedRecipe;
  iframeURL;
  listShowState = "out";

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService , private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.recipeID = this.route.snapshot.params['id'];
    const id = this.recipeID;
   this.selectedRecipe = this.recipeService.getRecipeByID(id);
   console.log('Observbale : ', (this.recipeService.recipeList));
    this.iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedRecipe.video_url);
  }

  showIngredientList(){
    this.listShowState = this.listShowState === 'out' ? 'in' : 'out';

  }

}

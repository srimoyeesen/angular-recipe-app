import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {

  recipeList = [];
  subscription : Subscription;
  updatedList;

  constructor(private _RecipeService: RecipeService, 
    private router: Router,
    private dialog : MatDialog ) { 
      
    }

  ngOnInit() {
    this._RecipeService.getRecipeList().subscribe((data) =>{
      this.recipeList = data['recipes'];
    }
    );
    this.subscription = this._RecipeService.recipeList.subscribe((data) => {
      this.updatedList = data;
  });
  }

  onAddRecipe() {
    this.router.navigate(['/addRecipe']);
  }

  openDialog(): void {
  
    const dialogRef = this.dialog.open(FormDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      // this._RecipeService.getRecipeList().subscribe((data) =>{
      //   this.recipeList = data['recipes'];
      // }
      // );  
      this.recipeList = this.updatedList['recipes'];

    });
  }


}

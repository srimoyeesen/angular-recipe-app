import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [RecipeService]
})
export class HomeComponent implements OnInit {

  recipeList = [];
  
  constructor(private _RecipeService: RecipeService, 
    private router: Router,
    private dialog : MatDialog ) { }

  ngOnInit() {
    this._RecipeService.getRecipeList()
    .subscribe(resNews => {
      this.recipeList = resNews.json()['recipes'];
    });
  }

  onAddRecipe() {
    this.router.navigate(['/addRecipe']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was  : ', result);
      this.router.navigate(['/home']);
    });
  }


}

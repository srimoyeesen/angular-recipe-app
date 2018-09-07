import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {

  form : FormGroup;
  recipe = new Recipe();
  message;
  ingredients_text ;

  constructor( private recipeService: RecipeService, public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
     
    }

  ngOnInit() {
  }

  onSubmit(){
    this.recipe.ingredient_list = this.ingredients_text.split(',');
    this.recipeService.addRecipe(this.recipe);
    this.dialogRef.close();
  }

}

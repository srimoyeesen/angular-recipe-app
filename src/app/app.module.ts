import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeMaterialModule } from './recipe-material-module/recipe-material-module.module';
import { HomeComponent } from './home/home.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeService } from './recipe.service';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeCardComponent,
    RecipeFormComponent,
    RecipeDetailsComponent,
    IngredientListComponent,
    FormDialogComponent
  ],
  imports: [
    BrowserModule,
    RecipeMaterialModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [FormDialogComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addRecipe', component: RecipeFormComponent },
  { path: 'recipeDetails/:id', component: RecipeDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


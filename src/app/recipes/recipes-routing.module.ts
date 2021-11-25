import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from "./recipes.component";
import { RecipeDetailsComponent } from "../ui/recipe-details/recipe-details.component";
import { CreateRecipeFormComponent } from "../ui/create-recipe-form/create-recipe-form.component";

const routes: Routes = [
  {
    path: '', component: RecipesComponent,
    children: [
      {
        path: '', component: CreateRecipeFormComponent,
      },
      {
        path: ':item', component: RecipeDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }

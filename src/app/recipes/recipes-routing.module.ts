import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from "./recipes.component";
import { RecipeDetailsComponent } from "../ui/recipe-details/recipe-details.component";
import { CreateRecipeFormComponent } from "../ui/create-recipe-form/create-recipe-form.component";
import { RecipeResolver } from "./recipe.resolver";

const routes: Routes = [
  {
    path: '', component: RecipesComponent,
    children: [
      {
        path: '', component: CreateRecipeFormComponent,
      },
      {
        path: ':id', component: RecipeDetailsComponent,
        resolve: {
          recipe: RecipeResolver,
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }

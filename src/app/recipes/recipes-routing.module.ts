import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from "./recipes.component";
import { RecipeDetailsComponent } from "../ui/recipe-details/recipe-details.component";
import { RecipeAddFormComponent } from "../ui/recipe-add-form/recipe-add-form.component";

const routes: Routes = [
  {
    path: '', component: RecipesComponent,
    children: [
      {
        path: '', component: RecipeAddFormComponent,
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

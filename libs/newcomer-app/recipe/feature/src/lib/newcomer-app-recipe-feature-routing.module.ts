import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { RecipeResolver } from "./resolvers/recipe.resolver";
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: '', component: RecipeFormComponent
      },
      {
        path: ':id', component: RecipeDetailsComponent,
        resolve: {
          recipe: RecipeResolver,
        }
      },
      {
        path: ':id/edit', component: RecipeFormComponent,
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
export class NewcomerAppRecipeFeatureRoutingModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { CreateIngredientFormComponent } from "./components/create-ingredient-form/create-ingredient-form.component";
import { IngredientsListComponent } from "./components/ingredients-list/ingredients-list.component";
import { RecipeDetailsComponent } from "./components/recipe-details/recipe-details.component";
import { RecipeFormComponent } from "./components/recipe-form/recipe-form.component";
import { RecipesListComponent } from "./components/recipes-list/recipes-list.component";
import { RecipesListItemComponent } from "./components/recipes-list-item/recipes-list-item.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { RecipeResolver } from "./resolvers/recipe.resolver";
import { NewcomerAppRecipeUiModule } from "@newcomer-app/newcomer-app/recipe/ui";
import { NewcomerAppRecipeFeatureRoutingModule } from "./newcomer-app-recipe-feature-routing.module";
import { NewcomerAppRecipeUtilModule } from "@newcomer-app/newcomer-app/recipe/util";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewcomerAppRecipeUiModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatOptionModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    NewcomerAppRecipeFeatureRoutingModule,
    NewcomerAppRecipeUtilModule,
  ],
  declarations: [
    CreateIngredientFormComponent,
    IngredientsListComponent,
    RecipeDetailsComponent,
    RecipeFormComponent,
    RecipesListComponent,
    RecipesListItemComponent,
    RecipesComponent
  ],
  providers: [
    RecipeResolver
  ],
  exports: [
    NewcomerAppRecipeFeatureRoutingModule
  ]
})
export class NewcomerAppRecipeFeatureModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NavbarComponent } from './navbar/navbar.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesListItemComponent } from './recipes-list-item/recipes-list-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateRecipeFormComponent } from './create-recipe-form/create-recipe-form.component';
import { MaterialModule } from "../../angular-material/material.module";
import { SnackbarService } from "./snackbar/snackbar.service";
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { CreateIngredientFormComponent } from './create-ingredient-form/create-ingredient-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    RecipesListComponent,
    RecipesListItemComponent,
    RecipeDetailsComponent,
    CreateRecipeFormComponent,
    IngredientsListComponent,
    CreateIngredientFormComponent
  ],
  providers: [
    SnackbarService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    CreateRecipeFormComponent
  ]
})
export class UiModule { }

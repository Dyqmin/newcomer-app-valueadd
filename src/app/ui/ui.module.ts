import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NavbarComponent } from './navbar/navbar.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesListItemComponent } from './recipes-list-item/recipes-list-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { MaterialModule } from "../../angular-material/material.module";
import { SnackbarService } from "./snackbar/snackbar.service";
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { CreateIngredientFormComponent } from './create-ingredient-form/create-ingredient-form.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';

@NgModule({
  declarations: [
    NavbarComponent,
    RecipesListComponent,
    RecipesListItemComponent,
    RecipeDetailsComponent,
    RecipeFormComponent,
    IngredientsListComponent,
    CreateIngredientFormComponent,
    DialogMessageComponent
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
    RecipeFormComponent
  ]
})
export class UiModule { }

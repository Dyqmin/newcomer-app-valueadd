import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesListItemComponent } from './recipes-list-item/recipes-list-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeAddFormComponent } from './recipe-add-form/recipe-add-form.component';
import { MaterialModule } from "../../angular-material/material.module";

@NgModule({
  declarations: [
    NavbarComponent,
    RecipesListComponent,
    RecipesListItemComponent,
    RecipeDetailsComponent,
    RecipeAddFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeAddFormComponent
  ]
})
export class UiModule { }

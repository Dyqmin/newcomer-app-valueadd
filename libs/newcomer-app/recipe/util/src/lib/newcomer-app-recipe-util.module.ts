import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { RecipeDialogService } from "./services/recipe-dialog.service";
import { SnackbarService } from "./services/snackbar.service";

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  providers: [RecipeDialogService, SnackbarService]
})
export class NewcomerAppRecipeUtilModule {}

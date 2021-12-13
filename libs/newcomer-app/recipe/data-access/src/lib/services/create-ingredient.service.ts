import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EMPTY, Observable, switchMap } from "rxjs";

import { HttpIngredientsService } from "./http-ingredients.service";
import { CreateIngredientFormComponent } from "@newcomer-app/newcomer-app/recipe/feature";
import { Ingredient } from "@newcomer-app/newcomer-app/recipe/domain";

@Injectable({
  providedIn: 'root'
})
export class CreateIngredientService {
  constructor(private _matDialog: MatDialog, private _httpIngredientsService: HttpIngredientsService) {
  }

  openForm(): Observable<Ingredient | never> {
    return this._matDialog.open(CreateIngredientFormComponent).afterClosed()
      .pipe(
        switchMap(resultName => {
          if (!!resultName) return this._httpIngredientsService.create(resultName);
          return EMPTY;
        })
      );
  }
}

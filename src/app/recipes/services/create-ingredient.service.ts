import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EMPTY, Observable, switchMap } from "rxjs";

import { HttpIngredientsService } from "./http-ingredients.service";
import { CreateIngredientFormComponent } from "../../ui/create-ingredient-form/create-ingredient-form.component";

@Injectable({
  providedIn: 'root'
})
export class CreateIngredientService {
  constructor(private _matDialog: MatDialog, private _httpIngredientsService: HttpIngredientsService) {
  }

  openForm(): Observable<boolean | never> {
    return this._matDialog.open(CreateIngredientFormComponent).afterClosed()
      .pipe(
        switchMap(resultName => {
          if (!!resultName) return this._httpIngredientsService.create(resultName);
          return EMPTY;
        })
      );
  }
}

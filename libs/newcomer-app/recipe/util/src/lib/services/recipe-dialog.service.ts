import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";

import { DialogMessageComponent } from "@newcomer-app/newcomer-app/recipe/ui";

@Injectable()
export class RecipeDialogService {

  constructor(private _matDialog: MatDialog) {
  }

  openDeleteRecipeDialog(): Observable<boolean> {
    return this._matDialog.open(DialogMessageComponent, {
      data: 'This item will be deleted. Are you sure?'
    }).afterClosed();
  }
}

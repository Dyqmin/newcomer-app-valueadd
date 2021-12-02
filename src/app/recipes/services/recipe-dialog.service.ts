import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";

import { DialogMessageComponent } from "../../ui/dialog-message/dialog-message.component";

@Injectable({
  providedIn: 'root'
})
export class RecipeDialogService {

  constructor(private _matDialog: MatDialog) {
  }

  openDeleteRecipeDialog(): Observable<boolean> {
    return this._matDialog.open(DialogMessageComponent, {
      data: 'This item will be deleted. Are you sure?'
    }).afterClosed();
  }
}

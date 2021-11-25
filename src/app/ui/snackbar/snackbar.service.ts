import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

export enum PanelType {
  Error,
  Success
}

@Injectable()
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) {
  }

  open(message: string, panelType: PanelType): void {
    this._snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'right',
      panelClass: [panelType === PanelType.Error ? 'snackbar-error' : 'snackbar-success']
    });
  }
}

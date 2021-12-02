import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogMessageComponent {

  constructor(private _matDialogRef: MatDialogRef<DialogMessageComponent>,
              @Inject(MAT_DIALOG_DATA) public msg: string) {
  }

  onNoClick() {
    this._matDialogRef.close(false);
  }

  onYesClick() {
    this._matDialogRef.close(true);
  }
}

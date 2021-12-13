import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient-form.component.html',
  styleUrls: ['./create-ingredient-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateIngredientFormComponent {

  ingredientControl = new FormControl('', [Validators.required]);

  constructor(private _dialogRef: MatDialogRef<CreateIngredientFormComponent>) {
  }

  onSaveClick(): void {
    this._dialogRef.close(this.ingredientControl.value);
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

import { HttpIngredientsService } from "../../recipes/services/http-ingredients.service";
import { Ingredient } from "../../recipes/models/ingredient";
import { CreateIngredientService } from "../../recipes/services/create-ingredient.service";

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientsListComponent {

  selectedIngredients = new FormControl([]);

  ingredients$: Observable<Ingredient[]> = this._httpIngredientsService.getAll()

  constructor(private _httpIngredientsService: HttpIngredientsService, private _createIngredientService: CreateIngredientService) { }

  getSelectedIngredients(): Ingredient[] {
    return this.selectedIngredients.value;
  }

  areIngredientsSelected(): boolean {
    return !!this.getSelectedIngredients().length;
  }

  onCreateClick() {
    this._createIngredientService.openForm().subscribe();
  }
}

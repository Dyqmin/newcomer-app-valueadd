import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, Validators } from "@angular/forms";

import { HttpIngredientsService } from "../../recipes/services/http-ingredients.service";
import { IngredientsListComponent } from "../ingredients-list/ingredients-list.component";
import { Ingredient } from "../../recipes/models/ingredient";

@Component({
  selector: 'app-recipe-add-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateRecipeFormComponent {

  @ViewChild(IngredientsListComponent, { static: true }) recipesListComponent!: IngredientsListComponent;

  recipeAddForm = this._fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    preparationTimeInMinutes: ['', Validators.required],
    ingredients: this._fb.array([], Validators.required)
  });

  constructor(private _fb: FormBuilder, private _httpIngredientsService: HttpIngredientsService) {
  }

  get areIngredientsSelected(): boolean {
    return !!this.recipesListComponent.selectedIngredients.value.length;
  }

  get ingredients(): FormArray {
    return this.recipeAddForm.get('ingredients') as FormArray;
  }

  onAddIngredients(): void {
    this.recipesListComponent.selectedIngredients.value
      .map((ingredient: Ingredient) => new FormControl(ingredient, [Validators.required]))
      .forEach((ingredientControl: AbstractControl) => {
        this.ingredients.push(ingredientControl)
    })
  }
}

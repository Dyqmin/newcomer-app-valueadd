import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators } from "@angular/forms";

import { IngredientsListComponent } from "../ingredients-list/ingredients-list.component";
import { Ingredient } from "../../recipes/models/ingredient";
import { RecipesIngredient } from "../../recipes/models/recipes-ingredient";
import { HttpRecipesService } from "../../recipes/services/http-recipes.service";

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
    ingredients: this._fb.array([], [Validators.required, Validators.minLength(1)])
  });

  constructor(private _fb: FormBuilder, private _httpRecipeService: HttpRecipesService) {
  }

  get areIngredientsSelected(): boolean {
    return !!this.recipesListComponent.selectedIngredients.value.length;
  }

  get ingredients(): FormArray {
    return this.recipeAddForm.get('ingredients') as FormArray;
  }

  get isFormInvalid(): boolean {
    return this.recipeAddForm.invalid;
  }

  deleteIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  onAddIngredients(): void {
    this.recipesListComponent.selectedIngredients.value
      .filter((ingredient: Ingredient) => !this.isIngredientOnRecipe(ingredient))
      .map((ingredient: Ingredient) => this._fb.group({
        _id: [ingredient._id, Validators.required],
        name: [ingredient.name, Validators.required],
        quantity: ['', Validators.required],
      }))
      .forEach((ingredientControl: AbstractControl) => {
        this.ingredients.push(ingredientControl)
      });
  }

  onSaveClick(): void {
    if (this.isFormInvalid) return;

    this._httpRecipeService.create(this.recipeAddForm.value).subscribe();
  }

  private isIngredientOnRecipe({ _id }: Ingredient): boolean {
    return this.ingredients.value.flatMap((e: RecipesIngredient) => e._id).includes(_id);
  }
}

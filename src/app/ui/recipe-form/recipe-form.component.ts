import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, ReplaySubject, takeUntil, tap } from "rxjs";

import { IngredientsListComponent } from "../ingredients-list/ingredients-list.component";
import { Ingredient } from "../../recipes/models/ingredient";
import { RecipesIngredient } from "../../recipes/models/recipes-ingredient";
import { HttpRecipesService } from "../../recipes/services/http-recipes.service";
import { Recipe } from "../../recipes/models/recipe";

@Component({
  selector: 'app-recipe-add-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeFormComponent implements OnInit, OnDestroy {

  @ViewChild(IngredientsListComponent, { static: true }) recipesListComponent!: IngredientsListComponent;

  recipeFormGroup = this._fb.group({
    _id: [''],
    name: ['', Validators.required],
    description: ['', Validators.required],
    preparationTimeInMinutes: ['', Validators.required],
    ingredients: this._fb.array([], [Validators.required, Validators.minLength(1)])
  });

  recipeFormChange$: Observable<Recipe> | undefined;
  private _destroyed$ = new ReplaySubject<boolean>(1);

  constructor(private _fb: FormBuilder, private _httpRecipeService: HttpRecipesService, private _route: ActivatedRoute) {
  }

  get areIngredientsSelected(): boolean {
    return !!this.recipesListComponent.selectedIngredients.value.length;
  }

  get ingredients(): FormArray {
    return this.recipeFormGroup.get('ingredients') as FormArray;
  }

  get isFormInvalid(): boolean {
    return this.recipeFormGroup.invalid;
  }

  get hasIdentifier(): boolean {
    return this.recipeFormGroup.get('_id')?.value;
  }

  deleteIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  initRecipeFormChange(recipe: Recipe): void {
    if (recipe) {
      this.recipeFormGroup.patchValue(recipe);
      this.ingredients.clear();
      recipe.ingredients.map(ingredient => this.createIngredientFormGroup(ingredient)).forEach(ingredientFormGroup => {
        this.ingredients.push(ingredientFormGroup);
      })
    }
  }

  ngOnInit(): void {
    this.recipeFormChange$ = this._route.data.pipe(
      map(({ recipe }) => recipe),
      tap(this.initRecipeFormChange.bind(this)),
      takeUntil(this._destroyed$)
    );
    this.recipeFormChange$.subscribe();
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  onAddIngredients(): void {
    this.recipesListComponent.selectedIngredients.value
      .filter((ingredient: Ingredient) => !this.isIngredientOnRecipe(ingredient))
      .map((ingredient: Ingredient) => this.createIngredientFormGroup(ingredient))
      .forEach((ingredientControl: AbstractControl) => {
        this.ingredients.push(ingredientControl)
      });
  }

  onSaveClick(): void {
    if (this.isFormInvalid) return;

    if (this.hasIdentifier) {
      this._httpRecipeService.patch(this.recipeFormGroup.value).subscribe();
      return;
    }
    this._httpRecipeService.create(this.recipeFormGroup.value).subscribe();

  }

  private createIngredientFormGroup(ingredient: Ingredient | RecipesIngredient): FormGroup {
    return this._fb.group({
      _id: [ingredient._id, Validators.required],
      name: [ingredient.name, Validators.required],
      quantity: [(ingredient as RecipesIngredient).quantity || '', Validators.required],
    })
  }

  private isIngredientOnRecipe({ _id }: Ingredient): boolean {
    return this.ingredients.value.flatMap((e: RecipesIngredient) => e._id).includes(_id);
  }
}

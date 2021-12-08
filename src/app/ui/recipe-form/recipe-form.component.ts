import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, ReplaySubject, takeUntil, tap } from "rxjs";
import { Store } from "@ngrx/store";

import { IngredientsListComponent } from "../ingredients-list/ingredients-list.component";
import { Ingredient } from "../../recipes/models/ingredient";
import { RecipesIngredient } from "../../recipes/models/recipes-ingredient";
import { Recipe } from "../../recipes/models/recipe";
import { addRecipe, updateRecipe } from "../../recipes/store/recipes.actions";

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

  constructor(private _fb: FormBuilder, private _route: ActivatedRoute, private _store: Store) {
  }

  get areIngredientsSelected(): boolean {
    return this.recipesListComponent.areIngredientsSelected();
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
    this.recipesListComponent.getSelectedIngredients()
      .filter((ingredient: Ingredient) => !this.isIngredientOnRecipe(ingredient))
      .map((ingredient: Ingredient) => this.createIngredientFormGroup(ingredient))
      .forEach((ingredientControl: AbstractControl) => {
        this.ingredients.push(ingredientControl)
      });
  }

  onSaveClick(): void {
    if (this.isFormInvalid) return;

    const recipe = this.recipeFormGroup.value;
    if (this.hasIdentifier) {
      this._store.dispatch(updateRecipe({ _id: recipe._id, recipe: recipe }))
      return;
    }

    this._store.dispatch(addRecipe({ recipe: recipe }));
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

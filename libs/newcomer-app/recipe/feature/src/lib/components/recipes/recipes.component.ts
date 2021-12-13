import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { from, Observable, switchMap, tap } from "rxjs";
import { Store } from "@ngrx/store";

import { RecipesListComponent } from "../recipes-list/recipes-list.component";
import { RecipeItemEvent, RecipeItemEventType } from "../recipes-list-item/recipes-list-item.component";
import { deleteRecipe, loadRecipes, selectRecipes } from "@newcomer-app/newcomer-app/recipe/data-access";
import { RecipeDialogService } from "@newcomer-app/newcomer-app/recipe/util";
import { Recipe } from "@newcomer-app/newcomer-app/recipe/domain";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent implements AfterViewInit {

  @ViewChild(RecipesListComponent, { static: true }) recipesListComponent!: RecipesListComponent;

  recipes$ = this._store.select(selectRecipes);

  constructor(protected router: Router,
              private _recipeDialogService: RecipeDialogService,
              private _store: Store) {
  }

  ngAfterViewInit(): void {
    this.recipesListComponent.selection$.pipe(
      switchMap(this.onSelectionChanged)
    ).subscribe();

    this._store.dispatch(loadRecipes());
  }

  onSelectionChanged = (recipeSelection: RecipeItemEvent): Observable<Recipe | boolean> => {
    const { _id: id } = recipeSelection.recipe;

    switch (recipeSelection.event) {
      case RecipeItemEventType.Delete:
        return this._recipeDialogService.openDeleteRecipeDialog().pipe(
          tap(isConfirmed => {
              if (isConfirmed) this._store.dispatch(deleteRecipe({ _id: id }));
            }
          )
        );
      case RecipeItemEventType.Details:
        return from(this.router.navigate([id]));
      case RecipeItemEventType.Edit:
        return from(this.router.navigate([`${id}/edit`]));
    }
  }
}

import { Injectable } from "@angular/core";
import { catchError, EMPTY, map, mergeMap, tap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { HttpRecipesService } from "../services/http-recipes.service";
import {
  addRecipe,
  addRecipeSuccess,
  deleteRecipe,
  deleteRecipeSuccess,
  loadRecipes,
  loadRecipesSuccess,
  updateRecipe,
  updateRecipeSuccess
} from "./recipes.actions";

@Injectable()
export class RecipesEffects {

  loadRecipes$ = createEffect(() => this._actions$.pipe(
    ofType(loadRecipes),
      mergeMap(() => this._httpRecipesService.getAll()
        .pipe(
          map(recipes => loadRecipesSuccess({ recipes: recipes })),
          catchError(() => EMPTY)
        ))
    )
  );

  deleteRecipe$ = createEffect(() => this._actions$.pipe(
    ofType(deleteRecipe),
      mergeMap(({ _id }) => this._httpRecipesService.delete(_id)
        .pipe(
          map(_ => deleteRecipeSuccess({ _id: _id })),
          catchError(() => EMPTY)
        ))
    )
  );

  addRecipe$ = createEffect(() => this._actions$.pipe(
    ofType(addRecipe),
      mergeMap(({ recipe }) => this._httpRecipesService.create(recipe)
        .pipe(
          map(_ => addRecipeSuccess(recipe)),
          catchError(() => EMPTY)
        ))
    )
  );

  updateRecipe$ = createEffect(() => this._actions$.pipe(
    ofType(updateRecipe),
      mergeMap(({ recipe, _id }) => this._httpRecipesService.patch(recipe)
        .pipe(
          map(_ => updateRecipeSuccess({ _id, recipe })),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(private _actions$: Actions,
              private _httpRecipesService: HttpRecipesService) {
  }
}

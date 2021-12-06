import { createAction, props } from '@ngrx/store';

import { Recipe } from "../models/recipe";

export const loadRecipes = createAction(
  '[Recipes List] Load Recipes',
);

export const loadRecipesSuccess = createAction(
  '[Recipes List] Load Recipes Success',
  props<{ recipes: ReadonlyArray<Recipe> }>()
)

export const addRecipe = createAction(
  '[Recipes List] Add Recipe',
  props<{ recipe: Recipe }>()
);

export const addRecipeSuccess = createAction(
  '[Recipes List] Add Recipe Success',
  props<Recipe>()
);

export const deleteRecipe = createAction(
  '[Recipes List] Delete Recipe',
  props<{ _id: string }>()
);

export const deleteRecipeSuccess = createAction(
  '[Recipes List] Delete Recipe Success',
  props<{ _id: string }>()
);

export const updateRecipe = createAction(
  '[Recipes List] Update Recipe',
  props<{ _id: string, recipe: Recipe }>()
);

export const updateRecipeSuccess = createAction(
  '[Recipes List] Update Recipe Success',
  props<{ _id: string, recipe: Recipe }>()
);

export const recipeActions = {
  loadRecipes,
  loadRecipesSuccess,
  addRecipe,
  addRecipeSuccess,
  deleteRecipe,
  deleteRecipeSuccess,
  updateRecipe,
  updateRecipeSuccess
};


import { createFeatureSelector, createSelector } from "@ngrx/store";

import { Recipe } from "../models/recipe";
import { RecipesState } from "./recipes.reducers";

export const selectRecipesState = createFeatureSelector<ReadonlyArray<Recipe>>('recipes');

export const selectRecipes = createSelector(
  selectRecipesState,
  (state: RecipesState) => state
);

export const selectOneRecipe = createSelector(
  selectRecipesState,
  (state: RecipesState, _id: string) => {
    const [item] = state.filter(recipe => recipe._id === _id);
    return item;
  }
);

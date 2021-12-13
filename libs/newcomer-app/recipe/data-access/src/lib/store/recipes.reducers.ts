import { createReducer, on } from "@ngrx/store";

import { recipeActions } from "./recipes.actions";
import { Recipe } from "@newcomer-app/newcomer-app/recipe/domain";

export type RecipesState = ReadonlyArray<Recipe>;

export const initialState: RecipesState = [];

export const recipesReducer = createReducer(
  initialState,
  on(recipeActions.loadRecipesSuccess, (state, { recipes }) => recipes),
  on(recipeActions.deleteRecipeSuccess, (state, { _id }) => [...state.filter((recipe) => recipe._id !== _id)]),
  on(recipeActions.addRecipeSuccess, (state, recipe) => [...state, recipe]),
  on(recipeActions.updateRecipeSuccess, (state, {_id, recipe}) => {
    return state.map(stateRecipe => stateRecipe._id === _id ? recipe : stateRecipe);
  })
)

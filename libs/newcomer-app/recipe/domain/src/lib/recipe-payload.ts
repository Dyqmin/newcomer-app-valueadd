import { Recipe } from "./recipe";

export type RecipePayload = Omit<Recipe, '_id'>

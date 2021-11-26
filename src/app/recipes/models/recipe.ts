import { RecipesIngredient } from "./recipes-ingredient";

export interface Recipe {
  _id: string;
  name: string
  preparationTimeInMinutes: number
  description: string
  ingredients: RecipesIngredient[];
}

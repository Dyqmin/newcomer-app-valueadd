import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    { _id: '1', description: '', ingredients: [], name: 'recipe 1', preparationTimeInMinutes: 5 },
    { _id: '2', description: '', ingredients: [], name: 'recipe 2', preparationTimeInMinutes: 5 },
  ];

  getAll() {
    return of(this.recipes);
  }
}

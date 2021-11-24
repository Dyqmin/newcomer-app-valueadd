import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Recipe } from "../models/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private _recipes: Recipe[] = [
    { _id: '1', description: '', ingredients: [], name: 'recipe 1', preparationTimeInMinutes: 5 },
    { _id: '2', description: '', ingredients: [], name: 'recipe 2', preparationTimeInMinutes: 5 },
  ];

  getAll(): Observable<Recipe[]> {
    return of(this._recipes);
  }
}

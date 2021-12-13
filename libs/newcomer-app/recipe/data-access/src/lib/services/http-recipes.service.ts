import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {  Observable } from "rxjs";

import { Recipe, RecipePayload } from "@newcomer-app/newcomer-app/recipe/domain";

@Injectable()
export class HttpRecipesService {

  constructor(@Inject('API_URL') private _apiUrl: string,
              private _httpClient: HttpClient) {
  }

  create(recipePayload: RecipePayload): Observable<Recipe> {
    return this._httpClient.post<Recipe>(`${this._apiUrl}/recipes`, recipePayload);
  }

  getOne(id: string): Observable<Recipe> {
    return this._httpClient.get<Recipe>(`${this._apiUrl}/recipes/${id}`);
  }

  getAll(): Observable<Recipe[]> {
    return this._httpClient.get<Recipe[]>(`${this._apiUrl}/recipes`);
  }

  delete(id: string): Observable<Recipe> {
    return this._httpClient.delete<Recipe>(`${this._apiUrl}/recipes/${id}`)
  }

  patch(recipe: Recipe): Observable<Recipe> {
    return this._httpClient.patch<Recipe>(`${this._apiUrl}/recipes/${recipe._id}`, recipe);
  }
}

import { Inject, Injectable } from "@angular/core";
import {  Observable } from "rxjs";

import { Recipe } from "../models/recipe";
import { HttpClient } from "@angular/common/http";
import { RecipePayload } from "../models/recipe-payload";

@Injectable({
  providedIn: 'root'
})
export class HttpRecipesService {

  constructor(@Inject('API_URL') private _apiUrl: string,
              private _httpClient: HttpClient) {
  }

  create(recipePayload: RecipePayload): Observable<Recipe> {
    return this._httpClient.post<Recipe>(`${this._apiUrl}/recipes`, recipePayload);
  }

  getAll(): Observable<Recipe[]> {
    return this._httpClient.get<Recipe[]>(`${this._apiUrl}/recipes`);
  }
}

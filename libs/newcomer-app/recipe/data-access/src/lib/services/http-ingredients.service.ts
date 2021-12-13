import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Ingredient } from "@newcomer-app/newcomer-app/recipe/domain";


@Injectable()
export class HttpIngredientsService {

  constructor(@Inject('API_URL') private _apiUrl: string,
              private _httpClient: HttpClient) {
  }

  getAll(): Observable<Ingredient[]> {
    return this._httpClient.get<Ingredient[]>(`${this._apiUrl}/ingredients`);
  }

  create(name: string): Observable<Ingredient> {
    return this._httpClient.post<Ingredient>(`${this._apiUrl}/ingredients`, {
      name: name
    });
  }
}

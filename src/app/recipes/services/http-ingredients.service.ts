import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";

import { Ingredient } from "../models/ingredient";

@Injectable({
  providedIn: 'root'
})
export class HttpIngredientsService {

  private _ingredients: Ingredient[] = [
    { _id: '1', name: 'sugar' },
    { _id: '2', name: 'salt' },
  ];

  getAll(): Observable<Ingredient[]> {
    return of(this._ingredients);
  }

  create(name: string): Observable<boolean> {
    return of(true);
  }
}

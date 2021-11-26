import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap, throwError } from "rxjs";
import { Recipe } from "../models/recipe";
import { PanelType, SnackbarService } from "../../ui/snackbar/snackbar.service";

@Injectable({
  providedIn: 'root'
})
export class HttpRecipesService {

  private _recipes: Recipe[] = [
    { _id: '1', description: '', ingredients: [], name: 'recipe 1', preparationTimeInMinutes: 5 },
    { _id: '2', description: '', ingredients: [], name: 'recipe 2', preparationTimeInMinutes: 5 },
  ];

  constructor(private _snackBarService: SnackbarService) {
  }

  getAll(): Observable<Recipe[]> {
    return of(this._recipes).pipe(
      tap(this.onSuccess.bind(this)),
      catchError(this.handleError.bind(this))
    );
  }

  onSuccess(): void {
    this._snackBarService.open('Retrieved data!', PanelType.Success);
  }

  handleError(error: Error): Observable<never> {
    this._snackBarService.open('There was an error while fetching data', PanelType.Error);
    return throwError(() => error);
  }
}

import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";

import { HttpRecipesService } from "../../../../data-access/src/lib/services/http-recipes.service";
import { Recipe } from "@newcomer-app/newcomer-app/recipe/domain";

@Injectable()
export class RecipeResolver implements Resolve<Observable<Recipe | null>> {

  constructor(private _httpRecipesService: HttpRecipesService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Recipe | null> {
    return this._httpRecipesService.getOne(route.paramMap.get('id') || '').pipe(
      catchError(_ => of(null))
    )
  }
}

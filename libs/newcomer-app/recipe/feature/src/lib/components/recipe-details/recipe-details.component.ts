import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";

import { Recipe } from "../../../../../domain/src/lib/recipe";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailsComponent {

  recipe$: Observable<Recipe | null> = this._route.data.pipe(
    map(({ recipe }) => recipe)
  );

  constructor(private _route: ActivatedRoute) {
  }
}

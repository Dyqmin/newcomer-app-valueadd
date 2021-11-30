import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Recipe } from "../../recipes/models/recipe";
import { map, Observable } from "rxjs";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailsComponent {

  recipe$: Observable<Recipe | null>

  constructor(private _route: ActivatedRoute) {
    this.recipe$ = this._route.data.pipe(
      map(({ recipe })=> recipe)
    )
  }
}

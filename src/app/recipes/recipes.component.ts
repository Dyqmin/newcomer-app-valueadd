import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { from, Observable, switchMap } from "rxjs";

import { Recipe } from "./models/recipe";
import { RecipesListComponent } from "../ui/recipes-list/recipes-list.component";
import { HttpRecipesService } from "./services/http-recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent implements AfterViewInit {

  @ViewChild(RecipesListComponent, { static: true }) recipesListComponent!: RecipesListComponent;

  recipes$ = this._recipesService.getAll();

  constructor(protected router: Router, private _recipesService: HttpRecipesService) {
  }

  ngAfterViewInit(): void {
    this.recipesListComponent.selection$.pipe(
      switchMap(this.onSelectionChanged)
    ).subscribe();
  }

  onSelectionChanged = (recipeSelection: Recipe): Observable<boolean> =>
    from(this.router.navigate([recipeSelection._id]))
}

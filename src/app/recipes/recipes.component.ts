import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { from, switchMap } from "rxjs";

import { Recipe } from "./models/recipe";
import { RecipesListComponent } from "../ui/recipes-list/recipes-list.component";
import { RecipesService } from "./services/recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent implements AfterViewInit {

  @ViewChild(RecipesListComponent, { static: true }) recipesListComponent!: RecipesListComponent;

  recipes$ = this.recipesService.getAll();

  constructor(protected router: Router, private recipesService: RecipesService) {
  }

  ngAfterViewInit() {
    this.recipesListComponent.selection$.pipe(
      switchMap(this.onSelectionChanged)
    ).subscribe();
  }

  onSelectionChanged = (recipeSelection: Recipe) =>
    from(this.router.navigate([recipeSelection._id]))
}

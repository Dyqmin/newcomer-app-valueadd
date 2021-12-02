import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, from, Observable, switchMap } from "rxjs";

import { RecipesListComponent } from "../ui/recipes-list/recipes-list.component";
import { HttpRecipesService } from "./services/http-recipes.service";
import { RecipeItemEvent, RecipeItemEventType } from "../ui/recipes-list-item/recipes-list-item.component";
import { Recipe } from "./models/recipe";
import { RecipeDialogService } from "./services/recipe-dialog.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent implements AfterViewInit {

  @ViewChild(RecipesListComponent, { static: true }) recipesListComponent!: RecipesListComponent;

  recipes$ = this._recipesService.getAll();

  constructor(protected router: Router,
              private _recipesService: HttpRecipesService,
              private _recipeDialogService: RecipeDialogService) {
  }

  ngAfterViewInit(): void {
    this.recipesListComponent.selection$.pipe(
      switchMap(this.onSelectionChanged)
    ).subscribe();
  }

  onSelectionChanged = (recipeSelection: RecipeItemEvent): Observable<Recipe | boolean> => {
    const { _id: id } = recipeSelection.recipe;

    switch(recipeSelection.event) {
      case RecipeItemEventType.Delete:
        return this._recipeDialogService.openDeleteRecipeDialog().pipe(
          switchMap(isConfirmed => isConfirmed ? this._recipesService.delete(id) : EMPTY)
        );
      case RecipeItemEventType.Details:
        return from(this.router.navigate([id]));
      case RecipeItemEventType.Edit:
        return from(this.router.navigate([`${id}/edit`]));
    }
  }
}

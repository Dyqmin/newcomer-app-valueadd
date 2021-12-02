import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Recipe } from "../../recipes/models/recipe";
import { Subject } from "rxjs";
import { RecipeItemEvent } from "../recipes-list-item/recipes-list-item.component";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent {

  @Input()
  recipes: Recipe[] | null = [];

  private _selectionSubject$ = new Subject<RecipeItemEvent>();

  selection$ = this._selectionSubject$.asObservable();

  onItemEvent(event: RecipeItemEvent): void {
    this._selectionSubject$.next(event);
  }
}

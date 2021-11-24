import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Recipe } from "../../recipes/models/recipe";
import { Subject } from "rxjs";
import { MatListOption } from "@angular/material/list";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent {

  @Input()
  recipes: Recipe[] | null = [];

  private _selectionSubject$ = new Subject<Recipe>();

  selection$ = this._selectionSubject$.asObservable();

  selectionChanged(selection: MatListOption[]): void {
    const [selected] = selection;
    this._selectionSubject$.next(selected.value);
  }
}

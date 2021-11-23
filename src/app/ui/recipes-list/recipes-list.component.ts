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

  private selectionSubject = new Subject<Recipe>();

  selection$ = this.selectionSubject.asObservable();

  selectionChanged(selection: MatListOption[]) {
    const [selected] = selection;
    this.selectionSubject.next(selected.value);
  }
}

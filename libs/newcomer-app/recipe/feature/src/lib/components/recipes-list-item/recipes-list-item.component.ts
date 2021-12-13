import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Recipe } from "../../../../../domain/src/lib/recipe";

export enum RecipeItemEventType {
  Details,
  Edit,
  Delete
}

export type RecipeItemEvent = { recipe: Recipe, event: RecipeItemEventType };

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListItemComponent {

  @Input() recipe!: Recipe;
  @Output() itemEvent = new EventEmitter<RecipeItemEvent>();
  RecipeItemEventType = RecipeItemEventType;

  onClick(event: RecipeItemEventType) {
    this.itemEvent.next({
      recipe: this.recipe,
      event: event
    });
  }
}

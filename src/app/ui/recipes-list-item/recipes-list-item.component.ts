import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recipes-list-item',
  templateUrl: './recipes-list-item.component.html',
  styleUrls: ['./recipes-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListItemComponent {
}

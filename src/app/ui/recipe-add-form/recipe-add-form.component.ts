import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeAddFormComponent {
}

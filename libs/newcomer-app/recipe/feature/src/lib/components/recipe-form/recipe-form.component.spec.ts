import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormComponent } from './recipe-form.component';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { provideMockStore } from "@ngrx/store/testing";
import { IngredientsListComponent } from "../ingredients-list/ingredients-list.component";

describe('RecipeFormComponent', () => {
  let component: RecipeFormComponent;
  let fixture: ComponentFixture<RecipeFormComponent>;

  const ingredientsListComponent = jasmine.createSpyObj<IngredientsListComponent>(
    'IngredientsListComponent',
    ['areIngredientsSelected', 'getSelectedIngredients']
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFormComponent ],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: { data: of({}) }},
        provideMockStore({})
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormComponent);
    component = fixture.componentInstance;
    component.recipesListComponent = ingredientsListComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsListComponent } from './ingredients-list.component';
import { HttpIngredientsService } from "../../recipes/services/http-ingredients.service";
import { CreateIngredientService } from "../../recipes/services/create-ingredient.service";
import { of } from "rxjs";

describe('IngredientsListComponent', () => {
  let component: IngredientsListComponent;
  let fixture: ComponentFixture<IngredientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsListComponent ],
      providers: [
        { provide: HttpIngredientsService, useValue: { getAll: () => of([]) }
          },
        { provide: CreateIngredientService, useValue: {}},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

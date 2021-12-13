import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIngredientFormComponent } from './create-ingredient-form.component';
import { MatDialogRef } from "@angular/material/dialog";

describe('CreateIngredientComponent', () => {
  let component: CreateIngredientFormComponent;
  let fixture: ComponentFixture<CreateIngredientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIngredientFormComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIngredientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

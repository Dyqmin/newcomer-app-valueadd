import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { HttpRecipesService } from "../services/http-recipes.service";
import { RecipesEffects } from "./recipes.effects";
import { TestScheduler } from "rxjs/testing";
import { recipeActions } from "./recipes.actions";

describe('RecipesEffects', () => {
  let actions$: Observable<any>;
  let effects: RecipesEffects;
  let httpServiceSpy: jasmine.SpyObj<HttpRecipesService>;
  let testScheduler: TestScheduler;

  const httpSpy = jasmine.createSpyObj('HttpRecipesService', ['getAll', 'delete', 'create', 'patch']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecipesEffects,
        provideMockActions(() => actions$),
        { provide: HttpRecipesService, useValue: httpSpy }
      ]
    });

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    effects = TestBed.inject(RecipesEffects);
    httpServiceSpy = TestBed.inject(HttpRecipesService) as jasmine.SpyObj<HttpRecipesService>;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadRecipes$', () => {
    it('should fire if users is null', (done) => {
      const spy = httpServiceSpy.getAll.and.callThrough().and.returnValue(of([]));
      actions$ = of(recipeActions.loadRecipes);
      effects.loadRecipes$.subscribe((res) => {
        expect(res).toEqual(recipeActions.loadRecipesSuccess({ recipes: [] }));
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { recipesReducer } from "./store/recipes.reducers";
import { EffectsModule } from "@ngrx/effects";

import { RecipesEffects } from "./store/recipes.effects";
import { HttpIngredientsService } from "./services/http-ingredients.service";
import { HttpRecipesService } from "./services/http-recipes.service";
import { environment } from "@newcomer-app/newcomer-app/shared/config";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('recipes', recipesReducer),
    EffectsModule.forFeature([RecipesEffects])
  ],
  providers: [
    {
      provide: 'API_URL',
      useValue: environment.apiUrl
    },
    HttpRecipesService,
    HttpIngredientsService
  ]
})
export class NewcomerAppRecipeDataAccessModule {}

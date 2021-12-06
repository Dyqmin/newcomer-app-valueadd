import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { createFeature, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { RecipesComponent } from "./recipes.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { UiModule } from "../ui/ui.module";
import { recipesReducer } from "./store/recipes.reducers";
import { RecipesEffects } from "./store/recipes.effects";

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    UiModule,
    StoreModule.forFeature(createFeature({
      name: 'recipes',
      reducer: recipesReducer
    })),
    EffectsModule.forFeature([RecipesEffects])
  ]
})
export class RecipesModule { }

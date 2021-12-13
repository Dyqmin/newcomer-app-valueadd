import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NewcomerAppRecipeShellRoutingModule } from "./newcomer-app-recipe-shell-routing.module";
import { ApiInterceptor } from "./interceptors/api.interceptor";
import { NewcomerAppRecipeFeatureModule } from "@newcomer-app/newcomer-app/recipe/feature";
import { NewcomerAppRecipeDataAccessModule } from "@newcomer-app/newcomer-app/recipe/data-access";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NewcomerAppRecipeDataAccessModule,
    NewcomerAppRecipeShellRoutingModule,
    NewcomerAppRecipeFeatureModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  exports: [NewcomerAppRecipeShellRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ]
})
export class NewcomerAppRecipeShellModule {}

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcomerAppRecipeShellModule } from "@newcomer-app/newcomer-app/recipe/shell";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    NewcomerAppRecipeShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

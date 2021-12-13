import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from "./components/navbar/navbar.component";
import { DialogMessageComponent } from "./components/dialog-message/dialog-message.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    NavbarComponent,
    DialogMessageComponent
  ],
  exports: [
    NavbarComponent,
    DialogMessageComponent
  ]
})
export class NewcomerAppRecipeUiModule {}

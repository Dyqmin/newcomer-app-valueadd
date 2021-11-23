import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }

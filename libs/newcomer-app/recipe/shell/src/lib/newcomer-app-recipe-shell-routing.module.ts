import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@newcomer-app/newcomer-app/recipe/feature').then(m => m.NewcomerAppRecipeFeatureModule),
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewcomerAppRecipeShellRoutingModule {
}

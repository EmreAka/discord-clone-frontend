import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:"", redirectTo: "", pathMatch: "full"
  },
  {
    path: "channels",
    loadChildren: () => import("./views/server-view/server-view.module").then(module => module.ServerViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

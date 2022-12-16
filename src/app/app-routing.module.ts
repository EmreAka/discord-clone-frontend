import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:"", redirectTo: "", pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: () => import("./views/login-view/login-view.module").then(module => module.LoginViewModule)
  },
  {
    path: "channels",
    loadChildren: () => import("./views/server-view/server-view.module").then(module => module.ServerViewModule)
  },
  {
    path: "discover",
    loadChildren: () => import("./views/discover-view/discover-view.module").then(module => module.DiscoverViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

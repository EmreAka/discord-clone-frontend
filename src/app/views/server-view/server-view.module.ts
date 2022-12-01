import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerViewComponent } from './server-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: ServerViewComponent}
]

@NgModule({
  declarations: [
    ServerViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServerViewModule { }

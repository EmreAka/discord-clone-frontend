import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerViewComponent } from './server-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ServerHeaderComponent } from './components/server-header/server-header.component';

const routes: Routes = [
  {path:"", component: ServerViewComponent}
]

@NgModule({
  declarations: [
    ServerViewComponent,
    ServerHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServerViewModule { }

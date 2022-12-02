import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerViewComponent } from './server-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ServerHeaderComponent } from './components/server-header/server-header.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ServerViewModule { }

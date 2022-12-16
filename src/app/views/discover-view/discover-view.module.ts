import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverViewComponent } from './discover-view.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: DiscoverViewComponent
  }
]

@NgModule({
  declarations: [
    DiscoverViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DiscoverViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoBarComponent } from './components/user-info-bar/user-info-bar.component';



@NgModule({
  declarations: [
    UserInfoBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserInfoBarComponent
  ]
})
export class SharedModule { }

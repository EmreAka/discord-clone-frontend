import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoBarComponent } from './components/user-info-bar/user-info-bar.component';
import { TextBoxComponent } from './components/text-box/text-box.component';



@NgModule({
  declarations: [
    UserInfoBarComponent,
    TextBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserInfoBarComponent,
    TextBoxComponent
  ]
})
export class SharedModule { }

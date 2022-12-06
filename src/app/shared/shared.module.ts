import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoBarComponent } from './components/user-info-bar/user-info-bar.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserInfoBarComponent,
    TextBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserInfoBarComponent,
    TextBoxComponent
  ]
})
export class SharedModule { }

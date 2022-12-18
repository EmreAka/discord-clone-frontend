import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoBarComponent } from './components/user-info-bar/user-info-bar.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateServerModalComponent } from './components/create-server-modal/create-server-modal.component';



@NgModule({
  declarations: [
    UserInfoBarComponent,
    TextBoxComponent,
    CreateServerModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserInfoBarComponent,
    TextBoxComponent,
    CreateServerModalComponent
  ]
})
export class SharedModule { }

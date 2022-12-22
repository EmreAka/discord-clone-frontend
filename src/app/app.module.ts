import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { ServerViewModule } from './views/server-view/server-view.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt'
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { UnauthorizedInterceptor } from './shared/interceptors/unauthorized.interceptor';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/states/counter/counter.reducer';
import { createChannelModalReducer } from './shared/states/create-channel-modal/create-channel-modal.reducers';

let token: string = <string>localStorage.getItem('token')
const config: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {
    transports: ['websocket'],
    extraHeaders: {
      Authorization: `Bearer ${token}`
    },
    query:{
      bearerToken: token
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServerViewModule,
    SharedModule,
    StoreModule.forRoot(
      { count: counterReducer,
        createChannelModal: createChannelModalReducer
      }
    )
    // SocketIoModule.forRoot(config)
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

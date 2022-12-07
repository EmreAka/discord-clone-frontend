import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerViewComponent } from './server-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ServerHeaderComponent } from './components/server-header/server-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { CoreModule } from 'src/app/core/core.module';
import { ChatComponent } from './components/chat/chat.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const routes: Routes = [
  {path:":serverId", component: ServerViewComponent}
]

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
    },
    
  }
};
@NgModule({
  declarations: [
    ServerViewComponent,
    ServerHeaderComponent,
    ChatHeaderComponent,
    ChannelsComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule.forChild(routes),
    SocketIoModule.forRoot(config)
  ]
})
export class ServerViewModule { }

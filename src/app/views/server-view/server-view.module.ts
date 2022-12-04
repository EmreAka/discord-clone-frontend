import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerViewComponent } from './server-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ServerHeaderComponent } from './components/server-header/server-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { CoreModule } from 'src/app/core/core.module';

const routes: Routes = [
  {path:":serverId", component: ServerViewComponent}
]

@NgModule({
  declarations: [
    ServerViewComponent,
    ServerHeaderComponent,
    ChatHeaderComponent,
    ChannelsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class ServerViewModule { }

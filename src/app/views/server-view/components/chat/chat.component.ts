import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Channel, ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  subscription$: Subscription
  channel: Channel | null;
  loading: boolean = true;

  messages: any[] = []

  constructor(
    private chatService: ChatService
  ) { }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  ngOnInit(): void {
    this.getChannel();
    this.chatService.lala()
    this.isMessageRecieved()
  }

  getMessagesByChannelId(channelId: number) {
    this.chatService.getAllMessagesByChannelId(channelId).subscribe({
      next: (value) => {
        this.messages = value
        this.loading = false
      }
    })
  }

  getChannel() {
    this.subscription$ = this.chatService.getChannel().subscribe({
      next: (value) => {
        this.channel = value;
        if (value != null) {
          this.getMessagesByChannelId(value.id)
        }
      }
    })
  }

  isMessageRecieved(){
    this.chatService.isMessageRecieved().subscribe({
      next: (value) => {
        if (value != null) {
          this.getMessagesByChannelId(this.channel!.id)
        }
      }
    })
  }

}

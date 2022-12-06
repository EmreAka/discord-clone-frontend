import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Channel, ChatService } from 'src/app/views/server-view/services/chat.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit, OnDestroy {
  subscription$: Subscription;
  channel: Channel = { id: 0, name: "", description: "" }

  // messageForm: FormGroup
  message: string

  constructor(
    private chatService: ChatService,
    private formBuilder: FormBuilder
  ) { }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }
  ngOnInit(): void {
    this.getChannel()
    // this.createForm()
  }

  // createForm() {
  //   this.messageForm = this.formBuilder.group({
  //     message: ["", [Validators.required, Validators.maxLength(500)]],
  //   })
  // }

  sendMessage(){
    //TODO: SERVER ID SHOULD BE TAKEN FROM A SERVICE
    this.chatService.add({message: this.message, serverId: 1, channelId: this.channel.id}).subscribe({
      next: (value) => {
        console.log(value)
      }
    })
  }

  getChannel() {
    this.subscription$ = this.chatService.getChannel().subscribe({
      next: (value) => {
        if (value != null) {
          this.channel = value;
        }
      }
    })
  }
}

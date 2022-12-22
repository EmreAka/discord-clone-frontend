import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { close } from '../../states/create-channel-modal/create-channel-modal.actions';

@Component({
  selector: 'app-create-channel-modal',
  templateUrl: './create-channel-modal.component.html',
  styleUrls: ['./create-channel-modal.component.scss']
})
export class CreateChannelModalComponent {
  createChannelModalState$: Observable<boolean>
  channelName: string = ""
  channelType: 'text' | 'voice' | null = null;

  constructor(
    private store: Store<{createChannelModal: boolean}>
  ) {
    this.createChannelModalState$ = store.select('createChannelModal')
   }

  addServer() {
  }

  closeModal() {
    this.store.dispatch(close())
  }

  getTextClass(){
    if (this.channelType) {
      if (this.channelType === 'text') {
        return 'bg-gray-500'
      }
    }
    return ''
  }

  getVoiceClass(){
    if (this.channelType) {
      if (this.channelType === 'voice') {
        return 'bg-gray-500'
      }
    }
    return ''
  }
}

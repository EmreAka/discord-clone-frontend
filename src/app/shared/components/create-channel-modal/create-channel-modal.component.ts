import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChannelService } from '../../services/channel.service';
import { close } from '../../states/create-channel-modal/create-channel-modal.actions';
import { State } from '../../states/create-channel-modal/create-channel-modal.reducers';

@Component({
  selector: 'app-create-channel-modal',
  templateUrl: './create-channel-modal.component.html',
  styleUrls: ['./create-channel-modal.component.scss']
})
export class CreateChannelModalComponent implements OnInit{
  createChannelModalState$: Observable<State>
  channelType: 'text' | 'voice' | null = null
  channelName: string = ""
  categoryId: number = 0

  constructor(
    private store: Store<{createChannelModal: State}>,
    private channelService: ChannelService
  ) {
    this.createChannelModalState$ = store.select('createChannelModal')
   }

  ngOnInit(): void {
    this.createChannelModalState$.subscribe({
      next: (value) => {
        if (value.category) {
          this.categoryId = value.category.id
        }
      }
    })
  }

  addChannel() {
    this.channelService.add({name: this.channelName, categoryId: this.categoryId, description: "test"})
    .subscribe({
      next: (value) => {
        alert("BAŞARILI")
      }
    })
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

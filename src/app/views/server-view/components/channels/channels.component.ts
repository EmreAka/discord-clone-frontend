import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Channel, ChatService } from '../../services/chat.service';
import { open } from 'src/app/shared/states/create-channel-modal/create-channel-modal.actions';
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit{
  categories: any[] = []
  channel: Channel = {id: 0, description: "", name: ""};
  loading: boolean = true
  createChannelModalState$: Observable<boolean>
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService,
    private store: Store<{createChannelModal: boolean}>
    ) {
      this.store.select('createChannelModal')
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (route) => {
        this.getCategories(route['serverId'])
      }
    })
    this.getChannelId()
  }

  getCategories(serverId: number){
    this.categoryService.getAllByServerId(serverId).subscribe({
      next: (data) => {
        this.categories = data;
        this.loading = false;
      }
    })
  }

  setChannel(channel: Channel){
    this.chatService.setChannel(channel)
  }

  getChannelId(){
    this.chatService.getChannel().subscribe({
      next: (value) => {
        if (value != null) {
          this.channel = value
        }
      }
    })
  }

  getClass(channelId: number){
    if (this.channel.id === channelId) {
      return "bg-gray-600 text-gray-100"
    }
    return ""
  }

  alert(){
    alert("AHAHAH")
  }

  openCreateChannelModal(){
    this.store.dispatch(open())
  }
}
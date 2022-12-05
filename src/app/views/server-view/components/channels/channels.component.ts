import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Channel, ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit{
  categories: any[] = []
  channel: Channel = {id: 0, description: "", name: ""};
  loading: boolean = true

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService
    ) {}

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
    this.chatService.setChannelId(channel)
  }

  getChannelId(){
    this.chatService.getChannelId().subscribe({
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
}
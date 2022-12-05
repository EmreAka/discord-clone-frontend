import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit{
  categories: any[] = []

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
  }

  getCategories(serverId: number){
    this.categoryService.getAllByServerId(serverId).subscribe({
      next: (data) => {
        this.categories = data;
      }
    })
  }

  setChannelId(channelId: number){
    this.chatService.setChannelId(channelId)
  }
}
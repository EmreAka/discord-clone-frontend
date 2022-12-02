import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-view',
  templateUrl: './server-view.component.html',
  styleUrls: ['./server-view.component.scss']
})
export class ServerViewComponent implements OnInit{
  channelId: string = ""
  serverId: string = ""

  constructor(private activatedRoute: ActivatedRoute) {  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.serverId = params["serverId"];
        this.channelId = params["channelId"];
      }
    });
  }

}

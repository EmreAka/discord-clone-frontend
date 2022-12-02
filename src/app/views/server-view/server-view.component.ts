import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-view',
  templateUrl: './server-view.component.html',
  styleUrls: ['./server-view.component.scss']
})
export class ServerViewComponent implements OnInit{
  chatId: string = ""
  constructor(private activatedRoute: ActivatedRoute) {  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.chatId = params["id"];
      }
    });
  }

}

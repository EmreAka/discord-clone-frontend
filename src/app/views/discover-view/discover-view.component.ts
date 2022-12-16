import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';

@Component({
  selector: 'app-discover-view',
  templateUrl: './discover-view.component.html',
  styleUrls: ['./discover-view.component.scss']
})
export class DiscoverViewComponent implements OnInit{
  servers: any[] = []

  constructor(private serverService: ServerService) {  }
 
  ngOnInit(): void {
    this.getServers()
  }

  getServers(){
    this.serverService.getAll().subscribe({
      next: (value) => {
        this.servers = value
        console.log(value)
      }
    })
  }
}

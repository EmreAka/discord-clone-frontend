import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  servers: any[] = []

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.getEnrolledServers()
  }

  getEnrolledServers(){
    this.serverService.getAllEnrolled().subscribe({
      next: (data) => {
        this.servers = data;
      }
    })
  }

}

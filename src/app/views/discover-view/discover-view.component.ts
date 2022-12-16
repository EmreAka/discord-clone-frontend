import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/shared/services/server.service';

@Component({
  selector: 'app-discover-view',
  templateUrl: './discover-view.component.html',
  styleUrls: ['./discover-view.component.scss']
})
export class DiscoverViewComponent implements OnInit{
  servers: any[] = []

  constructor(
    private serverService: ServerService,
    private router: Router
    ) { }
 
  ngOnInit(): void {
    this.getServers()
  }

  getServers(){
    this.serverService.getAll().subscribe({
      next: (value) => {
        this.servers = value
      }
    })
  }

  join(serverId: number){
    this.serverService.enroll(serverId).subscribe({
      next: (value) => {
        this.router.navigateByUrl("/channels/" + serverId)
      },
      error: (err) => {
        this.router.navigateByUrl("/channels/" + serverId)
      }
    })
  }
}

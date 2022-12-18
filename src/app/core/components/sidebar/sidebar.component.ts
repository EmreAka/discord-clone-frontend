import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ServerService } from 'src/app/shared/services/server.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  servers: any[] = []

  constructor(private serverService: ServerService,
    private categoryService: CategoryService
    ) { }

  ngOnInit(): void {
    this.getEnrolledServers()
  }

  openCreateServerModal(){
    this.serverService.openModal()
  }

  getEnrolledServers(){
    this.serverService.getAllEnrolled().subscribe({
      next: (data) => {
        this.servers = data;
      }
    })
  }

  getCategoriesByServerId(serverId: number){
    this.categoryService.getAllByServerId(serverId).subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  servers: string[] = ["server","server","server","server","server","server","server","server","server","server","server",]
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}

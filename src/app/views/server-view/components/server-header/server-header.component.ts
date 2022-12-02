import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-header',
  templateUrl: './server-header.component.html',
  styleUrls: ['./server-header.component.scss']
})
export class ServerHeaderComponent implements OnInit{
  serverTitle: string = "Emre'nin yeri"
  test: string[] = ["test1", "test2"]
  groups: Group[] = [{id: 1, title:"TEXT CHANNELS", channels: ["chat", "share", "cat-pics"]},{id: 2, title:"PROGRAMMING", channels: ["typescript", "csharp", "dart"]}]
  headerClicked: boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute) {  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params["id"])
      }
    });
  }
}

interface Group{
  id: number;
  title: string;
  channels: string[]
}
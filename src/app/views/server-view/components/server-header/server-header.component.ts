import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-header',
  templateUrl: './server-header.component.html',
  styleUrls: ['./server-header.component.scss']
})
export class ServerHeaderComponent{
  serverTitle: string = "Emre'nin yeri"
  headerClicked: boolean = false;
}


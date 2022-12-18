import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from 'src/app/shared/services/server.service';

@Component({
  selector: 'app-server-header',
  templateUrl: './server-header.component.html',
  styleUrls: ['./server-header.component.scss']
})
export class ServerHeaderComponent implements OnInit{
  @Input() serverTitle: string = "Emre'nin yeri"
  headerClicked: boolean = false;

  ngOnInit(): void {
  }

}


import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server-view',
  templateUrl: './server-view.component.html',
  styleUrls: ['./server-view.component.scss']
})
export class ServerViewComponent implements OnInit, AfterViewChecked{
  channelId: string = ""
  serverId: string = ""
  
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(private activatedRoute: ActivatedRoute) {  }

  ngAfterViewChecked(): void {
    if (this.myScrollContainer) {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.serverId = params["serverId"];
        this.channelId = params["channelId"];
      }
    });
  }

}

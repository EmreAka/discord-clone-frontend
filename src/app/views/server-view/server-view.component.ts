import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerDto, ServerService } from 'src/app/shared/services/server.service';

@Component({
  selector: 'app-server-view',
  templateUrl: './server-view.component.html',
  styleUrls: ['./server-view.component.scss']
})
export class ServerViewComponent implements OnInit, AfterViewChecked{
  channelId: string = ""
  serverId: string = ""

  server: ServerDto = {id: 0, founderUsername: "", name: ""}

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService
    ) {  }

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

        this.getServer()
      }
    });
  }

  getServer(){
    this.serverService.getById(+this.serverId).subscribe({
      next: (value) => {
        this.server = value;
        console.log(value)
      }
    })
  }

}

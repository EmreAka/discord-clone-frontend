import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ServerDto, ServerService } from 'src/app/shared/services/server.service';
import { decrement, increment, reset } from 'src/app/shared/states/counter/counter.actions';
@Component({
  selector: 'app-server-view',
  templateUrl: './server-view.component.html',
  styleUrls: ['./server-view.component.scss']
})
export class ServerViewComponent implements OnInit, AfterViewChecked {
  channelId: string = ""
  serverId: string = ""

  server: ServerDto = { id: 0, founderUsername: "", name: "" }

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  rightClickMenuStyle: any = {
    'display': 'none'
  }


  count$: Observable<number>

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }

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

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
    
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  getServer() {
    this.serverService.getById(+this.serverId).subscribe({
      next: (value) => {
        this.server = value;
        console.log(value)
      }
    })
  }

  detectRightClick($event: MouseEvent, click: 'empty' | 'channel' | 'category') {
    if (click === 'empty') {
      console.log("boş")
    }

    else if (click === 'channel') {
      console.log("channel")
    }

    if ($event.button == 0) {
      this.rightClickMenuStyle = {
        'display': 'none'
      }
    }

    if ($event.which == 3) {
      this.rightClickMenuStyle = {
        'display': 'block',
        'position': 'absolute',
        'left.px': $event.clientX - 80,
        'top.px': $event.clientY - 70
      };
    }
  }

}
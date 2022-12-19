import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-click-menu',
  templateUrl: './right-click-menu.component.html',
  styleUrls: ['./right-click-menu.component.scss']
})
export class RightClickMenuComponent {
  @Input() style: any = {
    'display': 'none'
  }
  
}
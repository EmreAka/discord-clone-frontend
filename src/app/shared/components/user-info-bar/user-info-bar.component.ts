import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info-bar',
  templateUrl: './user-info-bar.component.html',
  styleUrls: ['./user-info-bar.component.scss']
})
export class UserInfoBarComponent {
  isMicrophoneMuted: boolean = false;
  isHeadphoneMuted: boolean = false;
  constructor() {  }
}

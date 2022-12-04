import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/views/login-view/services/login.service';

@Component({
  selector: 'app-user-info-bar',
  templateUrl: './user-info-bar.component.html',
  styleUrls: ['./user-info-bar.component.scss']
})
export class UserInfoBarComponent implements OnInit{
  isMicrophoneMuted: boolean = false;
  isHeadphoneMuted: boolean = false;
  username: string | null;
  constructor(private authService: LoginService) {  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

  
}

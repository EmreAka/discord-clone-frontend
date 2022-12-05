import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { LoginService } from 'src/app/views/login-view/services/login.service';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info-bar',
  templateUrl: './user-info-bar.component.html',
  styleUrls: ['./user-info-bar.component.scss']
})
export class UserInfoBarComponent implements OnInit, OnDestroy{
  isMicrophoneMuted: boolean = false;
  isHeadphoneMuted: boolean = false;
  username: string | null;
  user: User;
  loading: boolean = true;

  private subscription: Subscription;

  constructor(
    private authService: LoginService,
    private userService: UserService
    ) {  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.getCurrentUser();
  }

  getCurrentUser(){
      this.subscription = this.userService.getCurrentUser().subscribe({
        next: (data) => {
          this.user = data;
          this.loading = false;
        }
      })
  }
}

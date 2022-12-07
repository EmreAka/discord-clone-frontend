import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private socket: Socket,
    private authService: AuthService) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.credentials = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

  login() {
    if (this.credentials.valid)
      this.loginService.login(this.credentials.value).subscribe({
        next: (value) => {
          localStorage.setItem("token", value.jwt)
          this.socket.connect()
          this.authService.decodeToken(value.jwt)
          console.log("alo")
          this.router.navigateByUrl("channels/1")
        }
      });
    else {
      alert("Complete the form!")
    }
  }

}

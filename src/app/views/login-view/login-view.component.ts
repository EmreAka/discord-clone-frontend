import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  credentials: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.createForm();
    this.credentials.valueChanges.subscribe({
      next: (value) => console.log(value)
    })
  } 

  createForm(){
    this.credentials = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
  }

  login(){
    if(this.credentials.valid)
      this.authService.login(this.credentials.value).subscribe({
        next: (value) => {
          localStorage.setItem("token", value.jwt)
          this.router.navigateByUrl("channels/10/10")
        }
      });
    else{
      alert("Complete the form!")
    }
  }

}

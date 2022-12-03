import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  credentials: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService) {
    
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
        next: (value) => console.log(value)
      });
    else{
      alert("Complete the form!")
    }
  }

}

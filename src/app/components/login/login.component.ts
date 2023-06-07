import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Login} from "../../models/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // @ts-ignore
  email: string;
  // @ts-ignore
  password: string;
  // @ts-ignore
  isLoading: boolean;

  constructor(private authService:LoginService) {}

  login(): void {
    this.isLoading = true;
    let loginData: Login = new Login(this.email, this.password)
    this.authService.login(loginData)
      .subscribe(
        response => {
        //   return access-token
          console.log('Login Successful', response)
        //  TODO: add access-token to header
          this.isLoading = false
        },
        error => {
        //   handle error
          console.error('Login error', error)
          this.isLoading = false
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserRequest, UserRole } from '../models/loginuser.model';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: LoginUserRequest;
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.loginUser = new LoginUserRequest();
    this.loginUser.email = "";
    this.loginUser.password = "";
  }

  onLoginClicked(): void {
    this.accountService.loginUser(this.loginUser).subscribe(res => {
      localStorage.setItem("eshop-username", res.email);
      localStorage.setItem("eshop-userid", res.id);
      localStorage.setItem("eshop-jwt", res.token);
      localStorage.setItem("eshop-usertypeid", res.role.id);
      localStorage.setItem("eshop-usertype", res.role.name);
      debugger;
      if (res.role.name == "Admin") {
        this.router.navigate(["dashboard"]);
      } else if (res.role.name == "Customer") {
        this.router.navigate(["shop"]);
      }
    }, _ => {
      alert('Bad credentials, please try again.');
    });
  }

}

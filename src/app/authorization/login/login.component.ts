import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {ValidationService} from "../../@moments/validators/validation.service";
import {SessionConstants} from "../../@moments/constants/constants";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {email:'',password:''};
  public loginForm : FormGroup;
  public isHide:boolean=true;

  constructor(private _auth: AuthService, private _router: Router,private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      'email': ['', [ValidationService.requireEmailValidator, ValidationService.emailValidator]],
      'password': ['', [ValidationService.requirePasswordValidator]]
    });
  }


  ngOnInit(): void {

  }

  public loginUser(): void {
    if(this.loginForm.valid) {
      this._auth.loginUser(this.loginForm.value)
        .subscribe(
          res => this.loginUserSuccess(res),
          err => this.loginUserError(err)
        )
    }
  }

  public hidePassword(): void {
    this.isHide = !this.isHide;
  }

  private loginUserSuccess(res: any): void {
    if (res.token) {
      sessionStorage.setItem(SessionConstants.token, res.token)
      this._router.navigate(['moments','moment-listing']).then();
    } else {
      this._router.navigate(['auth/login']).then()
    }
  }

  private loginUserError(err: any): void {
    //error handle
  }
}

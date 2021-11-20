import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../@moments/services/auth.service';
import {ValidationService} from "../../@moments/validators/validation.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;

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

  private loginUserSuccess(res: any): void {
    this._router.navigate(['/home'])

    /*if (res.token) {
      sessionStorage.setItem('token', res.token)
      this._router.navigate(['/home'])
    } else {
      this._router.navigate(['/login'])
    }*/
  }

  private loginUserError(err: any): void {
    //error handle
  }

}

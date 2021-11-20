import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../@moments/services/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ValidationService } from "../../@moments/validators/validation.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public userForm: FormGroup;

  constructor(private _auth: AuthService, private _router: Router, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'firstName': ['', [ValidationService.required, ValidationService.requireFirstNameValidator]],
      'lastName': ['', [ValidationService.required, ValidationService.requireLastNameValidator]],
      'phoneNo': [],
      'email': ['', [ValidationService.required, ValidationService.requireEmailValidator]],
      'city': [],
      'password': ['', [ValidationService.required, ValidationService.requirePasswordValidator]],
    });
  }

  public registerUser(): void {
    if (this.userForm.valid) {
      this._auth.registerUser(this.userForm.value).subscribe(
        res => this.registerUserSuccess(res),
        err => this.registerUserError(err)
      )
    }
  }

  private registerUserSuccess(res: any): void {
    sessionStorage.setItem('token', res.token)
    this._router.navigate(['/home'])
  }

  private registerUserError(err: any): void {
    //error handle
  }
}

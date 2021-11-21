import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
      firstName: ['', [ValidationService.required]],
      lastName: ['', [ValidationService.required]],
      phoneNo: [],
      email: ['', [ValidationService.required]],
      city: [],
      password: ['', [ValidationService.required]],
    });
  }

  public registerUser(): void {
    if (this.userForm.valid) {
      this._auth.registerUser(this.userForm.value).subscribe(
        () => this.registerUserSuccess(),
        err => this.registerUserError(err)
      )
    }
  }

  private registerUserSuccess(): void {
    this._router.navigate(['/auth/login'])
  }

  private registerUserError(err: any): void {
    //error handle
  }
}

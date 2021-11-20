import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerURL = '';
  private loginUrl = '';
  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user: any) {
    return this.http.post<any>(this.registerURL, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this.loginUrl, user)
  }
}

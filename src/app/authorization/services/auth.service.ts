import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APIEndPoints} from "../../@moments/constants/constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public registerUser(user: any) {
    const url = APIEndPoints.endpoint + 'register';
    return this.http.post<any>(url, user)
  }

  public loginUser(user: any) {
    const url = APIEndPoints.endpoint + 'login';
    return this.http.post<any>(url, user)
  }
}

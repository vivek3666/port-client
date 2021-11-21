import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IEntityService} from "../../../@moments/components/entity-list/i-entity.service.";
import {Moment} from "../../models/moment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {APIEndPoints, SessionConstants, UrlConstants} from "../../../@moments/constants/constants";

@Injectable({
  providedIn: 'root'
})
export class MomentsService implements IEntityService<Moment> {

  private httpOptions;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem(SessionConstants.token)}`
      })
    };
  }

  public getMoments(): Observable<any> {
    const url = APIEndPoints.endpoint + UrlConstants.momentBaseUrl;
    return this.http.get(url,this.httpOptions);
  }

  public addMoment(moment: Moment): Observable<any> {
    const url = APIEndPoints.endpoint + UrlConstants.momentBaseUrl + '/' + UrlConstants.moment;
    return this.http.post(url, moment,this.httpOptions);
  }

  public updateMoment(momentId: string, moment: Moment): Observable<any> {
    const url = APIEndPoints.endpoint + UrlConstants.momentBaseUrl + '/' + UrlConstants.moment + '/' + momentId;
    return this.http.put(url, moment,this.httpOptions);
  }

  public deleteMoment(momentId: string): Observable<any> {
    const url = APIEndPoints.endpoint + UrlConstants.momentBaseUrl + '/' + UrlConstants.moment + '/' + momentId;
    return this.http.delete(url,this.httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IEntityService} from "../../../@moments/components/entity-list/i-entity.service.";
import {Moment} from "../../models/moment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MomentsService implements IEntityService<Moment> {

  constructor(private http: HttpClient) { }

  public getMoments(): Observable<any> {
    const url = '';
    return this.http.get(url);
  }

  public updateMoment(momentId: string, moment: Moment): Observable<any> {
    const url = '';
    return this.http.put(url, moment);
  }

  public deleteMoment(momentId: string): Observable<any> {
    const url = '';
    return this.http.delete(url);
  }

  public addMoment(moment: Moment): Observable<any> {
    const url = '';
    const body = {};//{name: moment., entitlements: moment.entitlements};
    return this.http.post(url, body);
  }
}

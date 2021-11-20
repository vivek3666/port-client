import { Observable } from 'rxjs';

export interface IEntityService<T> {
  getMoments(): Observable<Array<T>>;
  updateMoment(momentId: string, moment: T): Observable<T>;
  deleteMoment(momentId: string): Observable<string>;
}

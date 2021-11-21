import { IEntityService } from './i-entity.service.';
import {Router} from "@angular/router";

export abstract class EntityListComponent<T> {
  public momentsData?: Array<T|any>;

  protected constructor(private entityService: IEntityService<T>,private router:Router) {
    this.setMomentsData();
  }

  public editMoment(baseUrl:string,row: T|any) {
    this.router.navigate([baseUrl , row._id],{queryParams:{moment:JSON.stringify(row)}}).then();
  }

  public deleteMoment(row: T|any) {
    this.entityService.deleteMoment(row._id.toString()).subscribe(
      ()=>this.deleteMomentSuccess(),
      (err)=> this.deleteMomentError(err));
  }

  public onActivate(baseUrl: string, event:any) {
    if(event.type === 'click') {
      this.router.navigateByUrl(baseUrl + '/' + event.row._id).then();
    }
  }

  private setMomentsData() {
    this.entityService.getMoments().subscribe(
      (result:any)=>this.getMomentSuccess(result.momentsData),
      (err)=> this.getMomentError(err));
  }

  private getMomentError(err: any) {
    //handle error
  }

  private getMomentSuccess(moments: Array<T>) {
    this.momentsData = moments;
      console.log(moments)
  }

  private deleteMomentSuccess() {
    this.setMomentsData();
  }

  private deleteMomentError(err: any) {
    //handle error
  }
}

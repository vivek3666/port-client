import { IEntityService } from './i-entity.service.';
import {Router} from "@angular/router";

export abstract class EntityListComponent<T> {
  public momentsData?: Array<T|any>;

  protected constructor(private entityService: IEntityService<T>,private router:Router) {
    this.setMomentsData();
  }

  public editMoment(baseUrl:string,row: T|any) {
    this.router.navigate([baseUrl , row._id]).then();
  }

  public deleteMoment(row: T|any) {
    this.entityService.deleteMoment(row._id.toString());
  }

  public onActivate(baseUrl: string, event:any) {
    if(event.type === 'click') {
      this.router.navigateByUrl(baseUrl + '/' + event.row._id).then();
    }
  }

  private setMomentsData() {
    this.momentsData = [
      { _id:'1',profileImage: '../assets/sampleImage.png', title: 'T1', tags: ['tag1','tag2']},
      { _id:'2',profileImage: '../assets/sampleImage.png', title: 'T2', tags: ['tag3','tag4']},
      { _id:'3',profileImage: '../assets/sampleImage.png', title: 'T3', tags: ['tag6','tag5']},
      { _id:'4',profileImage: '../assets/sampleImage.png', title: 'T4', tags: ['tag7','tag8']},
    ]
  }
}

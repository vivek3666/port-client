import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ValidationService} from "../../../../@moments/validators/validation.service";
import {MomentsService} from "../../services/moments.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Moment} from "../../../models/moment";
import {TagModel} from "ngx-chips/core/accessor";

@Component({
  selector: 'moment',
  templateUrl: './moment.component.html',
  styleUrls:['./moment.component.css']
})
export class MomentComponent implements OnInit {
  public momentForm: FormGroup;
  public moment:Moment = new Moment();
  public isNew:boolean = true;

  constructor(private formBuilder:FormBuilder,private momentService:MomentsService,private router:Router,
              private activatedRoute:ActivatedRoute ) {
    this.momentForm =  this.formBuilder.group({
      'title': ['', [ValidationService.required, ValidationService.requireTitleValidator]],
      'tags':[]
    });
  }

  ngOnInit() {
    const moment = this.activatedRoute.snapshot.queryParams['moment'];
    if(moment){
      this.moment = JSON.parse(moment);
      this.isNew = false;
    } else {
      this.isNew = true;
    }
  }

  public createMoment(): void {
    if(this.momentForm.valid) {
      this.momentForm.value.tags = this.momentForm.value.tags.map((obj:any)=> (obj.value));
      this.momentService.addMoment(this.momentForm.value).subscribe(
        ()=> this.createMomentSuccess(),
        (err)=> this.createMomentError(err));
    }
  }

  public editMoment(): void {
    if(this.momentForm.valid){
      const momentId: string = this.moment._id as string;
      this.momentService.updateMoment(momentId,this.momentForm.value).subscribe(
        ()=> this.createMomentSuccess(),
        (err)=> this.createMomentError(err));
    }
  }

  public onTagEdited(event: TagModel) {
    // console.log(event);
  }

  private createMomentSuccess(): void {
    this.router.navigate(['moments','moment-listing']).then();
  }

  private createMomentError(err: any): void {

  }
}

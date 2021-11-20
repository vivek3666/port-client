import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ValidationService} from "../../../../@moments/validators/validation.service";
import {MomentsService} from "../../services/moments.service";

@Component({
  selector: 'moment',
  templateUrl: './moment.component.html'
})
export class MomentComponent {
  public momentForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private momentService:MomentsService) {
    this.momentForm =  this.formBuilder.group({
      'title': ['', [ValidationService.required, ValidationService.requireTitleValidator]],
      'tags': ['', [ValidationService.required, ValidationService.requireTagsValidator]],
      'files': []
    });
  }

  public createMoment(): void {
    if(this.momentForm.valid){
      this.momentService.addMoment(this.momentForm.value).subscribe(
        (res)=> this.createMomentSuccess(res),
        (err)=> this.createMomentError(err));
    }
  }

  private createMomentSuccess(res:any): void {

  }

  private createMomentError(err: any): void {

  }
}

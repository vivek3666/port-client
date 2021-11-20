import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {EntityListComponent} from "../../@moments/components/entity-list/entity-list.component";
import {Moment} from "../models/moment";
import {ColumnMode} from "@swimlane/ngx-datatable";
import {MomentsService} from "./services/moments.service";
import {UrlConstants} from "../../@moments/constants/constants";

@Component({
  selector: 'm-moments-listing',
  templateUrl: './moments-listing.component.html',
  styleUrls: ['./moments-listing.component.css']
})
export class MomentsListingComponent extends EntityListComponent<Moment> {

  public columnMode = ColumnMode;
  public urlConstants = UrlConstants;

  constructor(private _router: Router, momentsService: MomentsService) {
    super(momentsService,_router);
  }
}

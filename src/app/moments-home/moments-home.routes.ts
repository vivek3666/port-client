import {Route} from "@angular/router";
import {MomentsHomeComponent} from "./moments-home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MomentsListingComponent} from "./moments-listing/moments-listing.component";
import {MomentComponent} from "./moments-listing/components/moment/moment.component";

export const MomentsHomeRoutes: Route[] = [
  {
    path: '',
    component: MomentsHomeComponent,
    children: [
      // {path: '', component: MomentsHomeComponent},
      {
        path: '',
        redirectTo: 'moment-listing',
        pathMatch: 'full'
      },
      {path: 'dashboard', component: DashboardComponent},
      {path: 'moment-listing', component: MomentsListingComponent},
      {
        path: ':id', component: MomentComponent
      }
    ]
  }
];

import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { MomentsHomeComponent } from "./moments-home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {MomentsHomeRoutes} from "./moments-home.routes";
import {MomentsHeaderComponent} from "./moments-header/moments-header.component";
import {MomentsListingComponent} from "./moments-listing/moments-listing.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MomentComponent} from "./moments-listing/components/moment/moment.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FileUploaderComponent} from "../@moments/components/file-uploader/file-uploader.component";
import {FileDragDropDirective} from "../@moments/directives/file-drag-drop.directive";

export const routes: Routes = [
  ...MomentsHomeRoutes,
];
@NgModule({
  imports:[
    RouterModule.forChild(routes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    MomentsHomeComponent,
    DashboardComponent,
    MomentsHeaderComponent,
    MomentsListingComponent,
    MomentComponent,
    FileUploaderComponent,
    FileDragDropDirective
  ]
})
export class MomentsHomeModule {}

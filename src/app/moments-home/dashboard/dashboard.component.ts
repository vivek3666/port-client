import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'moments-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _router: Router) {

  }
}

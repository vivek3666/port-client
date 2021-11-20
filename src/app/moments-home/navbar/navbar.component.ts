import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'moments-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router) {
  }

  public navigateToAddMoment(): void {
    this.router.navigate(['moments','new']).then();
  }

  public navigateToMomentListing(): void {
    this.router.navigate(['moments','moment-listing']).then();
  }
}

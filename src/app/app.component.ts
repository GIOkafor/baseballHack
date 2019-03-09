import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baseballHack';
  showBack = false;

  constructor(
    private router: Router,
    private location: Location){
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() );
  }

  handleRouteChange = () => {
    if (this.router.url.includes('cart') || this.router.url.includes('details')){
     this.showBack = true;
    }else{
      this.showBack = false;
    }
  }

  goBack(){
    this.location.back();
  }
}

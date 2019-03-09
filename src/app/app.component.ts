import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'baseballHack';
	showBack = false;
	pageTitle = 'food2seat';

	constructor(private router: Router, private location: Location) {
		router.events.subscribe((event) => event instanceof NavigationEnd && this.handleRouteChange());
	}

	handleRouteChange = () => {
		const { url } = this.router;
		if (url.includes('cart')) {
			this.pageTitle = 'Cart';
			this.showBack = true;
		} else if (url.includes('details')) {
			this.pageTitle = 'Details';
			this.showBack = true;
		} else if (url.includes('home')) {
			this.pageTitle = 'food2seat';
		} else if (url.includes('menu-list')) {
			this.pageTitle = 'Menu';
		} else if (url.includes('checkout')) {
      this.showBack = true;
      this.pageTitle = 'Checkout';
		} else {
			this.showBack = false;
		}
	};

	goBack() {
		this.location.back();
	}
}

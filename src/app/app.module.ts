import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

//routing stuff
const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'menu-list', component: MenuListComponent },
	{ path: 'menu-details/:id', component: MenuDetailsComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'checkout', component: CheckoutComponent },
	{ path: '', redirectTo: '/menu-list', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MenuListComponent,
		MenuDetailsComponent,
		CartComponent,
		CheckoutComponent
	],
	imports: [ BrowserModule, RouterModule.forRoot(appRoutes) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

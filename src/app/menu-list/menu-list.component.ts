import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu-list',
	templateUrl: './menu-list.component.html',
	styleUrls: [ './menu-list.component.css' ]
})
export class MenuListComponent implements OnInit {
	foodItems = [
		{
			id: 0,
			name: 'Mucho Nachos',
			price: 13.5,
			image: ''
		},
		{
			id: 1,
			name: 'Hot Dog',
			price: 8.5,
			image: ''
		}
	];

	drinkItems = [
		{
			id: 3,
			name: 'Bud Light',
			price: 10.5,
			image: 'assets/D1.jpg'
		},
		{
			id: 4,
			name: 'Steam Whistle',
			price: 10.5,
			image: 'assets/D2.jpg'
		},
		{
			id: 5,
			name: 'Coors Light',
			price: 10.5,
			image: 'assets/D3.jpg'
		},
		{
			id: 6,
			name: 'Coca Cola',
			price: 8.5,
			image: 'assets/D4.jpg'
		},
		{
			id: 7,
			name: 'Ginger Ale',
			price: 8.5,
			image: 'assets/D5.jpg'
		},
		{
			id: 8,
			name: 'Lemonade',
			price: 8.5,
			image: 'assets/D6.jpg'
		}
	];

	constructor() {}

	ngOnInit() {}
}

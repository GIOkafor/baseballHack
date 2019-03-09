import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  foodItems = [
    {
      'name': 'Mucho Nachos',
      'price': 13.50,
      'image': ''
    },
    {
      'name': 'Hot Dog',
      'price': 8.50,
      'image': ''
    }
  ];

  drinkItems = [
    {
      'name': 'Bud Light',
      'price': 10.50,
      'image': 'assets/d1.jpg'
    },
    {
      'name': 'Steam Whistle',
      'price': 10.50,
      'image': 'assets/d2.jpg'
    },
    {
      'name': 'Coors Light',
      'price': 10.50,
      'image': 'assets/d3.jpg'
    },
    {
      'name': 'Coca Cola',
      'price': 8.50,
      'image': 'assets/d4.jpg'
    },
    {
      'name': 'Ginger Ale',
      'price': 8.50,
      'image': 'assets/d5.jpg'
    },
    {
      'name': 'Lemonade',
      'price': 8.50,
      'image': 'assets/d6.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

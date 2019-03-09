import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  foodItems = [
    {
      'id': 0,
      'name': 'Mucho Nachos',
      'price': 13.50,
      'image': ''
    },
    {
      'id': 1,
      'name': 'Hot Dog',
      'price': 8.50,
      'image': ''
    },
    {
      'id': 9,
      'name': 'Chips with Cheese',
      'price': 13.50,
      'image': ''
    },
    {
      'id': 10,
      'name': 'Salad Bowl',
      'price': 12.50,
      'image': ''
    },
    {
      'id': 11,
      'name': 'Beef Burrito',
      'price': 12.50,
      'image': ''
    },
    {
      'id': 12,
      'name': 'Chicken Quesidilla',
      'price': 13.50,
      'image': ''
    }
  ];

  drinkItems = [
    {
      'id': 3,
      'name': 'Bud Light',
      'price': 10.50,
      'image': 'assets/d1.jpg'
    },
    {
      'id': 4,
      'name': 'Steam Whistle',
      'price': 10.50,
      'image': 'assets/d2.jpg'
    },
    {
      'id': 5,
      'name': 'Coors Light',
      'price': 10.50,
      'image': 'assets/d3.jpg'
    },
    {
      'id': 6,
      'name': 'Coca Cola',
      'price': 8.50,
      'image': 'assets/d4.jpg'
    },
    {
      'id': 7,
      'name': 'Ginger Ale',
      'price': 8.50,
      'image': 'assets/d5.jpg'
    },
    {
      'id': 8,
      'name': 'Lemonade',
      'price': 8.50,
      'image': 'assets/d6.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

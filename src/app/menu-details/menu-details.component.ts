import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  //variable declaration
  item: any; //the menu item currently being viewed

  constructor(
    private cartSvc: CartService
  ) { }

  ngOnInit() {
    this.item = {
      'name': 'hot dog',
      'price': 20
    }
  }

  addToCart(item){
    this.cartSvc.addToCart(item);
  }

}

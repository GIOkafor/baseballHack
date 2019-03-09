import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any;
  cartValue: any;
  hst: any;
  
  constructor(
    private cartSvc: CartService
  ) { }

  ngOnInit() {
    this.cartItems = this.cartSvc.getCart();
    this.cartValue = this.calculateValue();
    this.hst = (this.cartValue * 13)/100; 
  }

  getCart(){
    this.cartSvc.getCart();
  }

  calculateValue(){
    let totalValue = 0;

    for(var i = 0; i < this.cartItems.length; i++){
      totalValue += this.cartItems[i].price;
    }

    return totalValue;
  }

  removeItem(index){
    console.log("Deleting item with index: ", index);
    
    this.cartItems.splice(index, 1);
    this.cartValue = this.calculateValue();
    this.hst = (this.cartValue * 13)/100; 
  }

}

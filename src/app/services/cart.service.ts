import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];

  constructor() { }

  //get cart items
  getCart(){
    console.log("Getting items in cart");
    return this.cart;
  }

  //adds item to cart
  addToCart(item){
    console.log(item);

    this.cart.push(item);
    alert("Item added successfully");
  }

  //remove item from cart
  remove(index){
    console.log("removing item with index: ", index);
  }
}

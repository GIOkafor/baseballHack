import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CartService } from '../services/cart.service';
import { MENU } from '../mock-data/menu-items';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  //variable declaration
  item:any = {}; //the menu item currently being viewed
  items = MENU; //all menu items mocked

  constructor(
    private cartSvc: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let index = params.get("id");
      this.item = this.items[index];

      //debug code
      console.log("Current item viewing is: ");
      console.log(this.item);
    });
  }

  addToCart(item){
    this.cartSvc.addToCart(item);
  }

}

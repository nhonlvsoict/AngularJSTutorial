import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  // checkoutForm;
  //  property
  constructor(
    private cartService: CartService,
    // private formBuilder: FormBuilder
  ) {}
  // {
  //   this.checkoutForm = this.formBuilder.group({
  //     name: '',
  //     address: ''
  //   });
  // }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  clearCard() {
    // Process checkout data here
    // tslint:disable-next-line:prefer-const
    // let info = [];
    // info.push(customerData);
    // info.push(this.items);
    this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
    // console.warn('Your order has been submitted', info);
  }

}
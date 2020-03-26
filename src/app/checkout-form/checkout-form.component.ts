import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


import { Customer } from '../customer';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  constructor() { }
  paymentMethods = ['Cash', 'Credit Card', 'Momo'];
  customer = new Customer( 'NhonDz', 'Ha Noi', '113', '22/06/1999', 'Momo');
  submitted = false;
  @Input() items; // cai nay de nhan 1 biet tu trong component cha, truyen bien trong file.html khi goi selector con
  @Output() summit = new EventEmitter(); // cai nay de con ban ra mot event, ban ra trong html con, truyen event trong html cha

  onSubmit(customerData) {
    this.submitted = true;

    const info = [];
    info.push(customerData);
    let itemId = [];
    for (let item of this.items){
      itemId.push(item.id);
    }
    info.push(itemId);

    console.warn('Your order has been submitted', info);
  }
  clear() {
    this.customer = new Customer( '', '', '', '', '');
  }
  ngOnInit(): void {
  }

}

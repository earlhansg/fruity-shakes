import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { SnackService } from '@app/order/shared/services/snack.service';
import { CartService } from '@app/order/shared/services/cart.service';

import { Order } from '@app/order/shared/models/order.model';
import { Cart } from '@app/order/shared/models/cart.model';


@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.scss']
})
export class SnacksComponent implements OnInit {

  snacks$: Observable<Order[]>;

  faSpinner = faSpinner;


  constructor(
    private snackService: SnackService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.snacks$ = this.snackService.getSnacks();
  }

  onAddItem(item: Cart): void {
    const isExist = this.cartService.existInCart(item._id);
    if(isExist) {
      const cartItem = this.cartService.existInCart(item._id, true);
      const index = this.cartService.itemIndex(item._id);
      this.cartService.updateItemQuantity(cartItem.quantity, index);
    }
    else this.cartService.addtoCart(item);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
// import { map } from 'rxjs/operators';
import { Service } from '../models/services.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Service[];
  addToCart(product: Service) {
    this.items.push(product);
    console.log(this.items)
  }

  getItems() {
    console.log(this.items);
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

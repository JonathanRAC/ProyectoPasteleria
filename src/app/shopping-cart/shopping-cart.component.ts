// shopping-cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  isCartOpen = false;
  cartItems: any[] = [];
  total = 0;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  }

  removeItem(itemId: string, isCustom: boolean): void {
    this.cartService.removeFromCart(itemId, isCustom);
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  updateQuantity(item: any, newQuantity: number): void {
    if (newQuantity > 0) {
      this.cartService.updateQuantity(item.id, item.custom, newQuantity);
    } else {
      this.removeItem(item.id, item.custom);
    }
  }

  checkout(): void {
    alert(`Compra finalizada! Total: $${this.total.toFixed(2)}`);
    this.cartService.clearCart();
  }
}
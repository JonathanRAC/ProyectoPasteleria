// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  custom: boolean;
  customMessage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartSubject.asObservable();

  constructor() {
    // Cargar carrito desde localStorage si existe
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartSubject.next(this.cartItems);
    }
  }

  addToCart(item: Omit<CartItem, 'quantity'>): void {
    const existingItem = this.cartItems.find(
      i => i.id === item.id && i.custom === item.custom
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    this.updateCart();
  }

  removeFromCart(itemId: string, isCustom: boolean): void {
    this.cartItems = this.cartItems.filter(
      item => !(item.id === itemId && item.custom === isCustom)
    );
    this.updateCart();
  }

  updateQuantity(itemId: string, isCustom: boolean, newQuantity: number): void {
    const item = this.cartItems.find(
      i => i.id === itemId && i.custom === isCustom
    );
    if (item) {
      item.quantity = newQuantity;
      this.updateCart();
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  getTotalItems(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  private updateCart(): void {
    this.cartSubject.next([...this.cartItems]);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
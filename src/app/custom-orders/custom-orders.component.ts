import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-custom-orders',
  standalone: true,

  imports: [],
  templateUrl: './custom-orders.component.html',
  styleUrl: './custom-orders.component.css'
})
export class CustomOrdersComponent {
  customOrder = {
    description: '',
    size: 'medium',
    flavor: 'chocolate',
    frosting: 'buttercream',
    message: ''
  };
  basePrice = 350; // Precio base para órdenes personalizadas

  constructor(private cartService: CartService) { }

  submitCustomOrder() {
    this.cartService.addToCart({
      id: 'custom-' + Date.now(),
      name: 'Pastel Personalizado',
      price: this.basePrice,
      custom: true,
      customMessage: this.customOrder.description
    });

    // Resetear el formulario o redirigir al carrito
  }
}

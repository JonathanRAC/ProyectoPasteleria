import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgOptimizedImage,
    CurrencyPipe,
    FormsModule
  ],
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent {
  private cartService = inject(CartService);
  faEdit = faEdit;
  faShoppingCart = faShoppingCart;
  showCustomizeModal: boolean = false;
  selectedProduct: any = null;
  customMessages: { [key: number]: string } = {};

  products = [
    {
      id: 1,
      name: 'Pastel de Chocolate',
      price: 250,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN14vSDRMpTXB9wNrxiVGOfmfs5n2CkpzMkK3bLfmQccBKgCZVYxkT8F2exGs6bzO9Esg&usqp=CAU',
      description: 'Triple capa de chocolate belga',
      featured: true,
      customizable: true,
      available: true
    },
    {
      id: 2,
      name: 'Cheesecake de Fresa',
      price: 280,
      image: 'https://st.depositphotos.com/1000504/1355/i/450/depositphotos_13557456-stock-photo-strawberry-cheese-cake.jpg',
      description: 'Delicioso cheesecake con fresas frescas',
      featured: true,
      customizable: true,
      available: true
    },
    // Productos nuevos añadidos:
    {
      id: 3,
      name: 'Tarta Red Velvet',
      price: 320,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBr96BLlLNgEticroBoG-3T7SDnAuqgjPu3Q&s',
      description: 'Clásica tarta roja con crema de queso',
      featured: true,
      customizable: true,
      available: true
    },
    {
      id: 4,
      name: 'Pastel de Zanahoria',
      price: 270,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-uGRxK4RUUUdYUpMi05gi7DNm3eEDVIPWg&s',
      description: 'Húmedo pastel con nueces y frosting de queso',
      featured: false,
      customizable: true,
      available: true
    },
    // ... más productos
  ];
  getSafeImageUrl(imageName: string): string {
    if (!imageName) return 'assets/images/pastel-default.jpg';
    return `assets/images/${imageName}`;
  }

  trackByProductId(index: number, product: any): number {
    return product.id;
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/pastel-default.jpg';
  }

  addToCart(product: any): void {
    this.cartService.addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      custom: false
    });
  }
  customizeProduct(product: any): void {
    this.selectedProduct = product;
    this.showCustomizeModal = true;
  }

  addCustomToCart(customMessage: string): void {
    if (this.selectedProduct) {
      this.cartService.addToCart({
        id: this.selectedProduct.id.toString(),
        name: this.selectedProduct.name,
        price: this.selectedProduct.price,
        custom: true,
        customMessage: customMessage
      });
      this.showCustomizeModal = false;
      this.selectedProduct = null;
    }
  }
  getImagePath(imageName: string): string {
    return !imageName
      ? 'assets/images/pastel-default.jpg'
      : imageName.includes('assets/') || imageName.startsWith('http')
        ? imageName
        : `assets/images/${imageName}`;
  }
}

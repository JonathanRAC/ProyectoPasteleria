// product-catalog.component.ts
import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, NgOptimizedImage, CurrencyPipe],
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']

})
export class ProductCatalogComponent {
  products = [

    {
      id: 1,
      name: 'Pastel de Chocolate',
      price: 250,
      image: 'assets/images/chocolate-cake.jpg',
      description: 'Triple capa de chocolate belga',
      featured: true,
      customizable: true,
      available: true
    },
    // ... más productos
  ];

  trackByProductId(index: number, product: any): number {
    return product.id;
  }



  addToCart(product: any): void {
    // Lógica para añadir al carrito
  }

  customizeProduct(product: any): void {
    // Lógica para personalización
  }

  getImagePath(imageName: string): string {
    // Si no hay imagen definida, usa la por defecto
    if (!imageName) return 'assets/images/pastel-default.jpg';

    // Si ya es una ruta completa (http o assets)
    if (imageName.startsWith('http') || imageName.startsWith('assets/')) {
      return imageName;
    }

    // Para nombres simples de archivo
    return 'assets/images/' + imageName;
  }
  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/pastel-default.jpg';
    img.onerror = null; // Previene bucles infinitos
  }
} 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // <-- Importa lo necesario
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartItemsCount = 2; // Cambia esto para conectar con tu servicio de carrito
  constructor(private router: Router) { }
  openAuthModal() {
    // Aquí puedes implementar:
    // 1. Redirección a página de login
    // 2. Abrir un modal de autenticación
    // 3. Mostrar un dropdown con opciones

    // Ejemplo básico de redirección:
    this.router.navigate(['/auth']);
  }
}

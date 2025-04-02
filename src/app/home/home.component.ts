import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Carousel } from 'bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLeaf,
  faAward,
  faHeart,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('carousel') carouselRef!: ElementRef;

  // Iconos de FontAwesome
  icons = {
    leaf: faLeaf,
    award: faAward,
    heart: faHeart,
    prev: faChevronLeft,
    next: faChevronRight
  };

  // Datos para el carrusel (cambié el nombre a slides)
  slides = [
    {
      image: 'https://png.pngtree.com/background/20230606/original/pngtree-desserts-and-chocolate-are-set-up-on-a-wooden-table-picture-image_2879898.jpg',
      title: 'Dulce Tentación',
      description: 'Pastelería artesanal con los secretos de la abuela'
    },
    {
      image: 'https://estudiarcocina.com/wp-content/uploads/2023/04/Que-es-la-Reposteria-1024x576.jpg',
      title: 'Hecho con amor',
      description: 'Ingredientes 100% naturales y frescos'
    }
  ];

  // Datos para los destacados
  highlights = [
    {
      icon: this.icons.leaf,
      title: 'Ingredientes Naturales',
      description: 'Usamos solo lo mejor: frutas frescas, chocolate belga y harinas orgánicas'
    },
    {
      icon: this.icons.award,
      title: 'Tradición Artesanal',
      description: 'Recetas heredadas por generaciones con técnicas tradicionales'
    },
    {
      icon: this.icons.heart,
      title: 'Hecho con Amor',
      description: 'Cada pastel lleva dedicación y cuidado especial'
    }
  ];

  ngAfterViewInit() {
    new Carousel(this.carouselRef.nativeElement, {
      interval: 3000,
      ride: 'carousel'
    });
  }
}
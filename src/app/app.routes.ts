import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { preload: true }  // Para precarga opcional
    },
    {
        path: 'catalogo',
        component: ProductCatalogComponent,
        data: { animation: 'productPage' }  // Útil si usas animaciones
    },
    // O si prefieres lazy loading (recomendado para componentes grandes):
    // {
    //   path: 'catalogo',
    //   loadComponent: () => import('./product-catalog/product-catalog.component')
    //     .then(m => m.ProductCatalogComponent),
    //   data: { preload: true }
    // },
    {
        path: '**',
        redirectTo: ''
    }
];
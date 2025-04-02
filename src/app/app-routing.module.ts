import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes aquí
import { HomeComponent } from './home/home.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CustomOrdersComponent } from './custom-orders/custom-orders.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'catalogo', component: ProductCatalogComponent },
    { path: 'carrito', component: ShoppingCartComponent },
    { path: 'pedidos-personalizados', component: CustomOrdersComponent },
    { path: 'nosotros', component: AboutUsComponent },
    { path: '', component: ProductCatalogComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'custom-orders', component: CustomOrdersComponent },
    { path: '**', redirectTo: '' } // Redirecciona rutas no encontradas a Home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
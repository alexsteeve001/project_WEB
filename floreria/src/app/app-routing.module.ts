import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FacturaComponent } from './factura/factura.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { WhiteComponent } from './catalogo/white/white.component';
import { PinkComponent } from './catalogo/pink/pink.component';
import { LightPinkComponent } from './catalogo/light-pink/light-pink.component';

const routes: Routes = [
  
  { path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
     path: 'inicio',
     component: InicioComponent
  },
  {
     path: 'productos',
     component: ProductosComponent
  },
  {
     path: 'contactos',
     component: ContactosComponent
  },
  {
     path: 'nosotros',
     component: InformacionComponent
  },
  {
     path: 'carrito',
     component: CarritoComponent
  },
  {
     path: 'factura',
     component: FacturaComponent
  },
  {
     path: 'ofertas',
     component: OfertasComponent
  },
  {
     path: 'white',
     component: WhiteComponent
  },
  {
     path: 'pink',
     component: PinkComponent
  },
  {
     path: 'light-pink',
     component: LightPinkComponent
  },
  { 
    path: '**', 
    component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FacturaComponent } from './factura/factura.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { WhiteComponent } from './catalogo/white/white.component';
import { LightPinkComponent } from './catalogo/light-pink/light-pink.component';
import { PinkComponent } from './catalogo/pink/pink.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    ContactosComponent,
    InformacionComponent,
    HeaderComponent,
    FooterComponent,
    CarritoComponent,
    FacturaComponent,
    OfertasComponent,
    WhiteComponent,
    LightPinkComponent,
    PinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

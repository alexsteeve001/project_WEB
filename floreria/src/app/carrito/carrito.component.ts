import { Component, OnInit } from '@angular/core';
import { FacturacionService } from '../factura/facturacion.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  total=0;
  productos= [
    { nombre: 'Akito',  precio:25, codigo:'W001', imagen:'White/akito.png'},
    { nombre: 'Alba',  precio:23, codigo:'W002', imagen:'White/alba.png'},
    { nombre: 'First Lady',  precio:22, codigo:'W003', imagen:'White/first lady.png'},
    { nombre: 'Miss White',  precio:26, codigo:'W004', imagen:'White/miss white.png'},
    { nombre: 'Mondial',  precio:20, codigo:'W005', imagen:'White/mondial.png'},
    { nombre: 'Playa Blanca',  precio:27, codigo:'W006', imagen:'White/playaBlanca.png'},
    { nombre: 'Polar Star',  precio:22, codigo:'W007', imagen:'White/polarStar.png'},
    { nombre: 'Proud',  precio:26, codigo:'W008', imagen:'White/proud.png'},
    { nombre: 'Tibet',  precio:29, codigo:'W009', imagen:'White/tibet.png'},
    { nombre: 'White Chocolate',  precio:25, codigo:'W010', imagen:'White/whiteCgocolate.png'},
    { nombre: 'White Porcelain',  precio:24, codigo:'W011', imagen:'White/whitePorcelain.png'},
    { nombre: 'Azahara',  precio:25, codigo:'LP001', imagen:'LightPink/azahara.png'},
    { nombre: 'Christa',  precio:23, codigo:'LP002', imagen:'LightPink/christa.png'},
    { nombre: 'Engagement',  precio:22, codigo:'LP003', imagen:'LightPink/engagement.png'},
    { nombre: 'Frutteto',  precio:26, codigo:'LP004', imagen:'LightPink/frutteto.png'},
    { nombre: 'Hermosa',  precio:20, codigo:'LP005', imagen:'LightPink/hermosa.png'},
    { nombre: 'Jessika',  precio:27, codigo:'LP006', imagen:'LightPink/jessika.png'},
    { nombre: 'Luciano',  precio:26, codigo:'LP007', imagen:'LightPink/luciano.png'},
    { nombre: 'Mother of Pearl',  precio:20, codigo:'LP008', imagen:'LightPink/motherOfPearl.png'},
    { nombre: 'Nena',  precio:27, codigo:'LP009', imagen:'LightPink/nena.png'},
    { nombre: 'Novia',  precio:24, codigo:'LP010', imagen:'LightPink/novia.png'},
    { nombre: 'Pastella',  precio:26, codigo:'LP011', imagen:'LightPink/pastella.png'},
    { nombre: 'Pink Candy',  precio:20, codigo:'LP012', imagen:'LightPink/pinkCandy.png'},
    { nombre: 'Pink Mondial',  precio:27, codigo:'LP013', imagen:'LightPink/pinkMondial.png'},
    { nombre: 'Pink Porcelain',  precio:22, codigo:'LP014', imagen:'LightPink/pinkPorcelain.png'},
    { nombre: 'Ragazza',  precio:26, codigo:'LP015', imagen:'LightPink/ragazza.png'},
    { nombre: 'Señorita',  precio:22, codigo:'LP016', imagen:'LightPink/senorita.png'},
    { nombre: 'Sweet Akito',  precio:28, codigo:'LP017', imagen:'LightPink/sweetAkito.png'},
    { nombre: 'Sweet Elegance',  precio:22, codigo:'LP018', imagen:'LightPink/sweetElegance.png'},
    { nombre: 'Titanic',  precio:29, codigo:'LP019', imagen:'LightPink/titanic.png'},
    { nombre: 'Amsterdam',  precio:25, codigo:'P001', imagen:'Pink/amsterdam.png'},
    { nombre: 'Classic Duett',  precio:23, codigo:'P002', imagen:'Pink/classicDuett.png'},
    { nombre: 'Fusion',  precio:22, codigo:'P003', imagen:'Pink/fusion.png'},
    { nombre: 'Pink Love',  precio:26, codigo:'P004', imagen:'Pink/pinkLove.png'},
    { nombre: 'Princeless',  precio:20, codigo:'P005', imagen:'Pink/princeless.png'},
    { nombre: 'Sweet Life',  precio:22, codigo:'P006', imagen:'Pink/sweetLife.png'},
    { nombre: 'Sweet Unique',  precio:28, codigo:'P007', imagen:'Pink/sweetUnique.png'},
  ];

  productosAgregados=[
  ]
  
  constructor(private facturacionService:FacturacionService) { }

  ngOnInit() {
  }

  
  agregarProducto(codigo:string,nombre:string,precio:number){
    const index=this.productosAgregados.findIndex(x=>x.nombre==nombre);
    console.log(index);
    
    if(index==-1){
      this.agregarNuevoItem(nombre,precio,codigo);
    }else{
      this.sumarUnoAlItem(index,precio);
    }
    console.log(this.productosAgregados);

  }

  sumarUnoAlItem(index:number,precio:number){
    var itemProducto=this.productosAgregados[index];
    itemProducto.cantidad+=1;
    itemProducto.precioTotal+=precio;
    itemProducto.precioTotal=parseFloat(itemProducto.precioTotal.toFixed(2));
    this.productosAgregados[index]=itemProducto;
    this.total+=precio;
    this.total=parseFloat(this.total.toFixed(2));
  }

  agregarNuevoItem(nombreInput:string,precioInput:number,codigoInput:string){
    const itemProducto={
      codigo:codigoInput,
      nombre:nombreInput,
      precio:precioInput,
      cantidad:1,
      precioTotal:precioInput
    }
    this.productosAgregados.push(itemProducto);
    this.total=this.total+precioInput;
    this.total=parseFloat(this.total.toFixed(2));
  }

  restarProducto(nombre:string,precio:number){
    var index=this.productosAgregados.findIndex(x=>x.nombre==nombre);
    console.log(precio);
    var producto=this.productosAgregados[index];
    producto.cantidad-=1;
    producto.precioTotal-=precio;
    producto.precioTotal=parseFloat(producto.precioTotal.toFixed(2));
    this.productosAgregados[index]=producto;
    console.log(this.productosAgregados);
    this.total-=precio;
    this.total=parseFloat(this.total.toFixed(2));
    if(producto.cantidad==0){
      this.productosAgregados.splice(index,1);
    }
  }

  completarCompra(){
    if(this.total>0){
      alert('Compra realizada con éxito')
      this.facturacionService.subtotal=this.total
      this.facturacionService.costo_envio=this.total*0.05
      window.open('http://localhost:4200/#/factura',"_self")
    }else{
      alert('No puede completar una compra vacía')
    }
    this.productosAgregados=[];
    this.total=0;
  }

}

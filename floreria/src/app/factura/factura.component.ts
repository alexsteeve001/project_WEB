import { Component, OnInit } from '@angular/core';
import { FacturacionService } from './facturacion.service';
import { Factura } from '../modelo/Factura';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
facturas:Factura[]=[]
facturaNueva:Factura={
  id:'',
  nombres:'',
  apellidos:'',
  cedula:'',
  ciudad:'',
  provincia:'',
  direccion:'',
  subtotal:0,
  costo_envio:0,
  total:0,
  tipo_pago:'Transferencia Directa'
};

transferencia:boolean=true;

  constructor(private facturacionService:FacturacionService) { 
    this.facturaNueva.subtotal=facturacionService.subtotal
    this.facturaNueva.costo_envio=facturacionService.costo_envio
  }

  ngOnInit() {
  }

  finalizarCompra(){
    this.facturaNueva.id=uuid();
    console.log(this.facturaNueva)
    this.facturaNueva.total=this.facturaNueva.subtotal+this.facturaNueva.costo_envio
    this.facturacionService.registrarFactura(this.facturaNueva);
    alert('Factura registrada con éxito')
    window.open('http://localhost:4200/#/inicio',"_self");
  }

  choose(event){
    console.log(event)
  }
}

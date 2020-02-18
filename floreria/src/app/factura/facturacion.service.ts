import { Injectable } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import { Factura } from '../modelo/Factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  private facturasCollection:AngularFirestoreCollection<Factura>;
  private facturas:Observable<Factura[]>;
  subtotal=0
  costo_envio=0
  constructor(private _angularFirestore:AngularFirestore) {
    this.facturasCollection = this._angularFirestore.collection<Factura>('facturas');
    this.facturas = this.facturasCollection.valueChanges();
   }

  
  registrarFactura(factura:Factura){
    
    this.facturasCollection.doc(factura.id).set(factura);
   }
}

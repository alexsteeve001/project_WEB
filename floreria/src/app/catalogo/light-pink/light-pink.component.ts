import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-pink',
  templateUrl: './light-pink.component.html',
  styleUrls: ['./light-pink.component.css']
})
export class LightPinkComponent implements OnInit {

  productos= [
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
    { nombre: 'Titanic',  precio:29, codigo:'LP019', imagen:'LightPink/titanic.png'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

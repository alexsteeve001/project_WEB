import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-white',
  templateUrl: './white.component.html',
  styleUrls: ['./white.component.css']
})
export class WhiteComponent implements OnInit {
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
    { nombre: 'White Porcelain',  precio:24, codigo:'W011', imagen:'White/whitePorcelain.png'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

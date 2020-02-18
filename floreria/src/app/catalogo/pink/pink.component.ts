import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pink',
  templateUrl: './pink.component.html',
  styleUrls: ['./pink.component.css']
})
export class PinkComponent implements OnInit {

  constructor() { }

  productos= [
    { nombre: 'Amsterdam',  precio:25, codigo:'P001', imagen:'Pink/amsterdam.png'},
    { nombre: 'Classic Duett',  precio:23, codigo:'P002', imagen:'Pink/classicDuett.png'},
    { nombre: 'Fusion',  precio:22, codigo:'P003', imagen:'Pink/fusion.png'},
    { nombre: 'Pink Love',  precio:26, codigo:'P004', imagen:'Pink/pinkLove.png'},
    { nombre: 'Princeless',  precio:20, codigo:'P005', imagen:'Pink/princeless.png'},
    { nombre: 'Sweet Life',  precio:22, codigo:'P006', imagen:'Pink/sweetLife.png'},
    { nombre: 'Sweet Unique',  precio:28, codigo:'P007', imagen:'Pink/sweetUnique.png'},
  ];
  ngOnInit() {
  }

}

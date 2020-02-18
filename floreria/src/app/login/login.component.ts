import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo=''
  password=''
  constructor() { }

  ngOnInit() {
  }

  iniciarSesion(){
    console.log(this.correo)
    if(this.correo=='carol@gmail.com'){
      alert('Inicio de sesion exitoso')
      window.open('http://localhost:4200/#/inicio','_self')
    }else[
      
      alert('Credenciales incorrectas')
    ]
  }

}

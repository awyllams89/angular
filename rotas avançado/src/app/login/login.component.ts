import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();


  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    console.log(this.usuario)
    this.service.fazerLogin(this.usuario);
  }

}

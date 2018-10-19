import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { UsuarioRepository } from "../model/usuario.repository";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public rememberme: boolean;

  constructor(private repository: UsuarioRepository,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.repository.iniciarSesion(this.username,this.password);
  }

  getEstado(): number {
    if( this.repository.getEstado() === 0 )
    {
      this.repository.cargarUsuario();
      if(this.repository.getUsuario() !== undefined) {
        let tipo: string = this.repository.getUsuario().tipo;
        this.router.navigate([tipo]);
      }
    }

    return this.repository.getEstado();
  }
}

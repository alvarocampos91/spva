import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";

import { Usuario } from "./usuario.model"
import { Sesion } from "./sesion.model"

@Injectable()
export class UsuarioRepository {
	private esperarUsuario: boolean = false;
	private usuario: Usuario;

	constructor( private dataSource: RestDataSource ) { 
		this.cargarUsuario();
	}

	iniciarSesion( user:string, pass:string ) {
		this.dataSource.loginUsuario(user,pass);
	}

	getEstado(): number {
		if(this.dataSource.sesion !== undefined)
		{
			return this.dataSource.sesion.estado;
		}
		return -1;
	}

	getUsuario(): Usuario {
		return this.usuario;
	}

	cargarUsuario() {
		let getUsuario = this.dataSource.getUsuario();
		if(getUsuario && !this.esperarUsuario)
		{
			this.esperarUsuario = true;
			getUsuario.subscribe(data => {
				this.usuario = data;
				this.esperarUsuario = false;
			});
		}
	}
}
import { Component, Input, AfterViewInit, ViewChild, Directive, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

import { Usuario } from '../model/usuario.model';
import { Alumno } from '../model/alumno.model';

import { AlumnoRepository } from '../model/alumno.repository';
import { UsuarioRepository } from '../model/usuario.repository';

import { MenuRoute } from '../model/menu.model';

@Component({
	moduleId: module.id,
	templateUrl: "alumno.component.html"
})
export class AlumnoComponent {
	public routes: MenuRoute[] = [];
	public nombre: string;
	public tipo: string;
	public foto: string;
	public almnoCargado = false;

	constructor( private alumnoRepository: AlumnoRepository, 
		private usuarioRepository: UsuarioRepository,
		private router: Router ) { 
		this.routes.push(new MenuRoute('Cardex','assignment','cardex',true));
		this.routes.push(new MenuRoute('Mapa','polymer','mapa',false));
		this.routes.push(new MenuRoute('Proyección','line_weight','proyeccion',false));
	}

	goToRoute(r: string) {
		this.router.navigate(['alumno/'+r]);
		let index = this.routes.findIndex(route => route.route === r);

		for(let i = 0; i < this.routes.length; i++){
			this.routes[i].active = false;
		}

		this.routes[index].active = true;
	}

	getAlumno(): Alumno {
		if(this.getUsuario() === undefined) {
			this.router.navigate(['login']);
		}
		else if(this.alumnoRepository.getDatosAlumno() === undefined) {
			if(!this.almnoCargado){
				this.alumnoRepository.cargarAlumno(this.getUsuario().nombreUsuario);
				this.almnoCargado = true;
			}
		}
		else {
			let usuario: Usuario = this.getUsuario();
			let alumno: Alumno = this.alumnoRepository.getDatosAlumno();
			this.tipo = usuario.tipoUsuario;
			this.foto = "http://localhost:8000/imgPerfil/" + usuario.idImagenPerfil;
			this.nombre = alumno.nombre;
		}
		
		return this.alumnoRepository.getDatosAlumno();
	}

	getUsuario(): Usuario {
		return this.usuarioRepository.getUsuario();
	}

	cerrarSesion() {
		this.usuarioRepository.cerrarSesion();
		this.alumnoRepository.cerrarSesion();
		this.router.navigate(['login']);
		this.almnoCargado = false;
	}
}
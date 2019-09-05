import { Component, Input, AfterViewInit, ViewChild, Directive, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

import { Usuario } from '../model/usuario.model';
import { Profesor } from '../model/profesor.model';

import { TutorRepository } from '../model/tutor.repository';
import { UsuarioRepository } from '../model/usuario.repository';

import { MenuRoute } from '../model/menu.model';

@Component({
	moduleId: module.id,
	templateUrl: "tutor.component.html"
})
export class TutorComponent {
	public routes: MenuRoute[] = [];
	public nombre: string;
	public tipo: string;
	public foto: string;
	public tutorCargado = false;

	constructor( private tutorRepository: TutorRepository, 
		private usuarioRepository: UsuarioRepository,
		private router: Router ) { 
		this.routes.push(new MenuRoute('Grupos','group','grupos'));
		this.routes.push(new MenuRoute('Ultimo curso','layers','cursoAnterior'));
	}

	goToRoute(r: string) {
		this.router.navigate(['tutor/'+r]);
	}

	getTutor(): Profesor {
		if(this.getUsuario() === undefined) {
			this.router.navigate(['login']);
		}
		else if(this.tutorRepository.getDatosTutor() === undefined) {
			if(!this.tutorCargado){
				this.tutorRepository.cargarTutor(this.getUsuario().nombreUsuario);
				this.tutorCargado = true;
			}
		}
		else {
			let usuario: Usuario = this.getUsuario();
			let tutor: Profesor = this.tutorRepository.getDatosTutor();
			this.tipo = usuario.tipoUsuario;
			this.foto = "http://localhost:8000/imgPerfil/" + usuario.idImagenPerfil;
			this.nombre = tutor.nombre + ' ' + tutor.apellidoPaterno + ' ' + tutor.apellidoMaterno;
		}
		
		return this.tutorRepository.getDatosTutor();
	}

	getUsuario(): Usuario {
		return this.usuarioRepository.getUsuario();
	}

	cerrarSesion() {
		this.usuarioRepository.cerrarSesion();
		this.tutorRepository.cerrarSesion();
		this.router.navigate(['login']);
		this.tutorCargado = false;
	}
}
import { Component, Input, AfterViewInit, ViewChild, Directive, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

import { Usuario } from '../model/usuario.model';
import { Profesor } from '../model/profesor.model';

import { TutorRepository } from '../model/tutor.repository';
import { UsuarioRepository } from '../model/usuario.repository';

@Component({
	moduleId: module.id,
	templateUrl: "tutor.component.html"
})
export class TutorComponent {

	constructor( private tutorRepository: TutorRepository, 
		private usuarioRepository: UsuarioRepository,
		private router: Router ) { }

	getTutor(): Profesor {
		if(this.getUsuario() === undefined) {
			this.router.navigate(['login']);
		}
		else if(this.tutorRepository.getDatosTutor() === undefined) {
			this.tutorRepository.cargarTutor(this.getUsuario().nombreUsuario);
		}
		return this.tutorRepository.getDatosTutor();
	}

	getUsuario(): Usuario {
		return this.usuarioRepository.getUsuario();
	}
}
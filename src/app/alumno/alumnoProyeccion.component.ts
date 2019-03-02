import { Component } from "@angular/core";

import { AlumnoRepository } from '../model/alumno.repository';
import { Alumno } from '../model/alumno.model';

@Component({
	moduleId: module.id,
	templateUrl: 'alumnoProyeccion.component.html',
})
export class AlumnoProyeccionComponent {
	public matricula: number;

	constructor(private alumnoRepository: AlumnoRepository) {
		let almno = this.alumnoRepository.getDatosAlumno();
		this.matricula = almno.matricula;
	}

	getAlumno(): Alumno {		
		return this.alumnoRepository.getDatosAlumno();
	}
}
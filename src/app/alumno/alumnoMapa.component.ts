import { Component } from "@angular/core";

import { AlumnoRepository } from '../model/alumno.repository';
import { Alumno } from '../model/alumno.model';

@Component({
	moduleId: module.id,
	templateUrl: 'alumnoMapa.component.html',
})
export class AlumnoMapaComponent {
	public matricula: number;

	constructor(private alumnoRepository: AlumnoRepository) {
		let almno = this.alumnoRepository.getDatosAlumno();
		this.matricula = almno.matricula;
	}

	getAlumno(): Alumno {		
		return this.alumnoRepository.getDatosAlumno();
	}
}
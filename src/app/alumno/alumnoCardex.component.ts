import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';

import { AlumnoRepository } from '../model/alumno.repository';
import { Alumno } from '../model/alumno.model';

@Component({
	moduleId: module.id,
	templateUrl: 'alumnoCardex.component.html',
})
export class AlumnoCardexComponent {
	public matricula: number;

	constructor(
		private alumnoRepository: AlumnoRepository,
		private router: Router, 
		private route: ActivatedRoute) 
	{}

	getAlumno(): Alumno {		
		return this.alumnoRepository.getDatosAlumno();
	}

	goCardex() {
		this.navigate('cardex');
	}

	goMapa() {
		this.navigate('mapa');
	}

	goProyeccion() {
		this.navigate('proyeccion');
	}

	navigate(d: string){
		this.router.navigate(['/alumno/'+d]);
	}
}
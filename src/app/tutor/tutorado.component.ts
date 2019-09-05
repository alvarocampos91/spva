import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';

import { AlumnoRepository } from '../model/alumno.repository';

@Component({
	moduleId: module.id,
	templateUrl: 'tutorado.component.html',
})
export class TutoradoComponent {
	public seccion: string;
	public matricula: string;
	public dato: string;

	constructor(private alumnoRepository: AlumnoRepository,
		private router: Router, private route: ActivatedRoute) {
		route.params.subscribe( params => {
			this.seccion = params['seccion'];
			this.matricula = params['matricula'];
			this.dato = params['dato'];
			this.alumnoRepository.cargarAlumno(this.matricula);
		});
	}

	getAlumno(){
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
		this.router.navigate(['/tutor/'+this.seccion+'/alumno/'+this.matricula+'/'+d]);
	}
}
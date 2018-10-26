import { Component } from "@angular/core";
import { TutorRepository } from "../model/tutor.repository";
import { Router, ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';

import { Alumno } from "../model/alumno.model";
import { Grupo } from "../model/grupo.model";
import { Asignatura } from "../model/asignatura.model";

@Component({
	moduleId: module.id,
	templateUrl: 'alumnoTabla.component.html'
})
export class AlumnoTablaComponent {
	public seccion: string;
	public loading = false;
	public total = 0;
	public page = 1;
	public limit = 5;

	constructor(private repository: TutorRepository,
		private router: Router, private route: ActivatedRoute) {
		route.params.subscribe( params => {
			this.seccion = params['seccion'];
		});
	}

	getGrupos(): Grupo[]{
		return this.repository.getGrupos();
	}

	getGrupo(): Grupo {
		// while(this.getGrupos().length == 0);
		let grupo = this.repository.getGrupo(this.seccion);
		if( grupo === undefined )
		{
			this.loading = true;
			if(this.seccion !== undefined)
			{
				grupo = this.getGrupos().filter( grupo => grupo.seccion === this.seccion )[0];
			}
			else if(this.getGrupos()[0] !== undefined)
			{
				const seccion = this.getGrupos()[0].seccion;
				this.router.navigate(['tutor/grupos/'+seccion]);
			}
		}
		else
		{
			this.loading = false;
			this.total = grupo.totalAlumnos;
		}
		return grupo;
	}

	getAlumnos(): Alumno[]{
		let grupo = this.getGrupo();
		if(grupo !== undefined && grupo.alumnos === undefined)
		{
			this.repository.getAlumnos(grupo.seccion,grupo.totalAlumnos);
		}
		return grupo.alumnos;
	}

	setLimit(n: number): void {
		this.limit = n;
		if( n * this.page > this.total ) {
			this.page = Math.round(this.total/n);
		}
		this.getAlumnos();	
	}

	goToPage(n: number): void {
		if( (n-1) * this.limit < this.total ){
			this.page = n;
		}		
		this.getAlumnos();
	}

	onNext(): void {
		if( this.page * this.limit < this.total ){
			this.page++;
		}
		this.getAlumnos();
	}

	onPrev(): void {
		if( this.page > 1 ) {
			this.page--;
		}
		this.getAlumnos();
	}
}
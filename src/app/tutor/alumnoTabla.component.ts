import { Component } from "@angular/core";
import { AlumnoRepository } from "../model/alumno.repository";
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
	private grupo: Grupo;
	public loading = false;
	public total = 0;
	public page = 1;
	public limit = 5;

	constructor(private repository: AlumnoRepository,
		private router: Router, private route: ActivatedRoute) {}

	getGrupos(): Grupo[]{
		return this.repository.getGrupos();
	}

	getGrupo(): Grupo {
		// while(this.getGrupos().length == 0);
		if( this.grupo === undefined )
		{
			this.loading = true;
			this.route.params.subscribe( params => {
				if(params["seccion"] !== undefined)
				{
					const seccion = params["seccion"];
					this.grupo = this.getGrupos().filter( grupo => grupo.seccion === seccion )[0];
				}
				else
				{
					const seccion = this.getGrupos()[0].seccion;
					this.router.navigate(['tutor/grupos/'+seccion]);
				}
			} );
		}
		else
		{
			this.loading = false;
			this.total = this.grupo.totalAlumnos;
		}
		return this.grupo;
	}

	getAlumnos(): Alumno[]{
		let grupo = this.getGrupo();
		if(grupo !== undefined && grupo.alumnos === undefined)
		{
			this.repository.getAlumnos(grupo.seccion,grupo.totalAlumnos);
			this.getGrupo();
		}
		return grupo.alumnos;
	}

	goToPage(n: number): void {
		this.page = n;
		this.getAlumnos();
	}

	onNext(): void {
		this.page++;
		this.getAlumnos();
	}

	onPrev(): void {
		this.page--;
		this.getAlumnos();
	}
}
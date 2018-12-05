import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";

import { Usuario } from "./usuario.model";
import { Profesor } from "./profesor.model";
import { Sesion } from "./sesion.model";
import { Alumno } from "./alumno.model";
import { Grupo } from "./grupo.model";

@Injectable()
export class TutorRepository {
	private usuario: Usuario;
	private tutor: Profesor;
	private sesion: Sesion;
	private grupos: Grupo[] = [];

	constructor( private dataSource: RestDataSource ){
		this.sesion = dataSource.sesion;
		if(this.sesion !== undefined)
		{
			dataSource.getUsuario().subscribe( us => {
				this.usuario = us;
				this.cargarTutor(us.nombreUsuario);
			} );
		}
	}

	cargarTutor(dni) {
		this.dataSource.getProfesor(dni).subscribe( pr => this.tutor = pr );
		this.dataSource.getGrupos(dni).subscribe(data => {
			this.grupos = data;
		});
	}

	cargarAlumnos(seccion:string) {
		let ind = this.grupos.findIndex(grupo=>grupo.seccion === seccion);
		this.grupos[ind].alumnos = [];
		let count = this.grupos[ind].totalAlumnos;

		this.dataSource.getAlumnos(seccion,count).subscribe(data=>{
			this.grupos[ind].alumnos = data;
		});
	}

	getDatosTutor(): Profesor {
		return this.tutor;
	}

	getSesion(): Sesion {
		return this.sesion;
	}

	cerrarSesion() {
		this.usuario = this.tutor = this.sesion = undefined;
		this.grupos = [];
	}

	getGrupos(): Grupo[] {
		return this.grupos;
	}

	getGrupo(seccion: string): Grupo {
		let ind = this.grupos.findIndex(grupo=>grupo.seccion === seccion);
		return this.grupos[ind];
	}
}
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

	getDatosTutor(): Profesor {
		return this.tutor;
	}

	getSesion(): Sesion {
		return this.sesion;
	}

	getGrupos(): Grupo[] {
		return this.grupos;
	}

	getGrupo(seccion: string): Grupo {
		return this.grupos.filter( grupo => grupo.seccion === seccion )[0];
	}

	getAlumnos(seccion: string, count: number): Alumno[]{
		const grupo = this.grupos.filter(grupo => grupo.seccion === seccion)[0];
		let ind = this.grupos.findIndex(grupo=>grupo.seccion === seccion);

		if(grupo && grupo.alumnos === undefined){
			this.grupos[ind].alumnos = [];
			this.dataSource.getAlumnos(seccion,count).subscribe(data=>{
				if(this.grupos[ind].alumnos.length == 0){
					this.grupos[ind].alumnos = data;
				}
			});
		}

		return this.grupos[ind].alumnos || [];
	}
}
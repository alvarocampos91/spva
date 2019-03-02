import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";

import { Usuario } from "./usuario.model";
import { Sesion } from "./sesion.model";
import { Alumno } from "./alumno.model";

@Injectable()
export class AlumnoRepository {
	private usuario: Usuario;
	private alumno: Alumno;
	private sesion: Sesion;

	constructor(private dataSource: RestDataSource) {
		this.sesion = dataSource.sesion;
		if(this.sesion !== undefined)
		{
			dataSource.getUsuario().subscribe( us => {
				this.usuario = us;
				this.cargarAlumno(us.nombreUsuario);
			} );
		}
	}

	getBaseUrl(): string {
		return this.dataSource.baseUrl;
	}

	cargarAlumno(dni) {
		this.dataSource.getAlumno(dni).subscribe( pr => this.alumno = pr );
	}

	getDatosAlumno(): Alumno {
		return this.alumno;
	}

	getSesion(): Sesion {
		return this.sesion;
	}

	cerrarSesion() {
		this.usuario = this.alumno = this.sesion = undefined;
	}
}
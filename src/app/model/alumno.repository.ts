import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";

import { Alumno } from "./alumno.model";
import { Grupo } from "./grupo.model";
import { Asignatura } from "./asignatura.model";

@Injectable()
export class AlumnoRepository {
	private grupos: Grupo[] = [];

	constructor(private dataSource: RestDataSource) {
		dataSource.getGrupos(100000001).subscribe(data => {
			this.grupos = data;
		});
	}

	getBaseUrl(): string {
		return this.dataSource.baseUrl;
	}

	getGrupos(): Grupo[] {
		return this.grupos;
	}

	getAlumnos(seccion: string, count: number): Alumno[]{
		const grupo = this.grupos.filter(grupo => grupo.seccion === seccion)[0];
		let ind = this.grupos.findIndex(grupo=>grupo.seccion === seccion);

		if(grupo && grupo.alumnos === undefined){
			this.dataSource.getAlumnos(seccion,count).subscribe(data=>{
				this.grupos[ind].alumnos = data;
			});
		}

		return this.grupos[ind].alumnos || [];
	}
}
import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Alumno } from "./alumno.model";
import { Asignatura } from "./asignatura.model";
import { Grupo } from "./grupo.model";

const PROTOCOL = "http";
const PORT = 8000;

@Injectable()
export class RestDataSource{
	baseUrl: string;
	auth_token: string;
	constructor(private http: Http) {
		this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
	}

	getGrupos(dni: number): Observable<Grupo[]> {
		return this.sendRequest(RequestMethod.Get, "grupos?dni=" + dni);
	}

	getAlumnos(seccion:string,count?:number): Observable<Alumno[]> {
		return this.sendRequest(RequestMethod.Get, "alumnos?seccion=" + seccion + "&count="+count);
	}

	saveAlumno( alumno: Alumno ): Observable<Alumno> {
		return this.sendRequest(RequestMethod.Post, "alumnos", alumno, true);
	}

	updateAlumno( alumno: Alumno ): Observable<Alumno> {
		return this.sendRequest(RequestMethod.Put, "alumnos/${product.matricula}", alumno, true);
	}

	deleteAlumno( matricula: number ): Observable<Alumno> {
		return this.sendRequest(RequestMethod.Delete, "alumnos/${matricula}",null,true);
	}

	getAsignaturasMatricula(matricula: number): Observable<Asignatura[]> {
		return this.sendRequest(RequestMethod.Get, "asignaturas?matricula="+matricula);
	}

	private sendRequest(verb: RequestMethod,
		url: string, body?, auth: boolean = false)
	: Observable<Object> {
		let request = new Request({
			method: verb,
			url: this.baseUrl + url,
			body: body
		});
		if (auth && this.auth_token != null) {
			request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
		}
		return this.http.request(request).map(response => response.json());
	}
}
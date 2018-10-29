import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Alumno } from "./alumno.model";
import { Asignatura } from "./asignatura.model";
import { Grupo } from "./grupo.model";
import { Sesion } from "./sesion.model";
import { Usuario } from "./usuario.model";
import { Profesor } from "./profesor.model";

const PROTOCOL = "http";
const PORT = 8000;

@Injectable()
export class RestDataSource {
	public baseUrl: string;
	public sesion: Sesion;

	constructor(private http: Http) {
		this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
	}

	loginUsuario( user: string, pass: string ) {
		this.getLogin(user, pass).subscribe(data =>{
			this.sesion = data;
		});
	}

	getCardex( matricula: string ): Observable<any> {
		return this.sendRequest(RequestMethod.Get, "kardex?_id="+matricula);
	}

	getAprobadas( matricula: string ): Observable<any> {
		return this.sendRequest(RequestMethod.Get, "aprobadas?matricula="+matricula);
	}

	getCarreraAsig( matricula: string ): Observable<any> {
		return this.sendRequest(RequestMethod.Get, "asignaturasCarrera?matricula="+matricula);
	}

	getLogin( user: string, pass: string ): Observable<Sesion> {
		return this.sendRequest(RequestMethod.Get, "validarUsuario?usuario="+user+"&contrasena="+pass);
	}

	getUsuario(): Observable<Usuario> {
		if(this.sesion !== undefined ){
			let id = this.sesion.id;
			return this.sendRequest(RequestMethod.Get, "usuarios/" + id);
		}
	}

	getGrupos(dni: string): Observable<Grupo[]> {
		return this.sendRequest(RequestMethod.Get, "grupos?dni=" + dni);
	}

	getProfesor(dni:string): Observable<Profesor> {
		return this.sendRequest( RequestMethod.Get, "profesores/" + dni );
	}

	getAlumnos(seccion:string,count?:number): Observable<Alumno[]> {
		return this.sendRequest(RequestMethod.Get, "alumnos?seccion=" + seccion + "&count="+count);
	}

	getAlumno( matricula: string ): Observable<Alumno> {
		return this.sendRequest(RequestMethod.Get, "alumnos/" + matricula );
	}

	saveAlumno( alumno: Alumno ): Observable<Alumno> {
		return this.sendRequest(RequestMethod.Post, "alumnos", alumno, true);
	}

	updateAlumno( alumno: Alumno ): Observable<Alumno> {
		return this.sendRequest(RequestMethod.Put, "alumnos/${alumno.matricula}", alumno, true);
	}

	deleteAlumno( matricula: number ): Observable<Alumno> {
		return this.sendRequest(RequestMethod.Delete, "alumnos/${matricula}",null,true);
	}

	getAsignaturasMatricula(matricula: number): Observable<Asignatura[]> {
		return this.sendRequest(RequestMethod.Get, "asignaturas?matricula="+matricula);
	}

	private sendRequest(verb: RequestMethod,
		url: string, body?, auth: boolean = false)
	: Observable<Object>  {
		let request = new Request({
			method: verb,
			url: this.baseUrl + url,
			body: body
		});
		if (auth && this.sesion.token != null) {
			request.headers.set("Authorization", `Bearer<${this.sesion.token}>`);
		}
		return this.http.request(request).map(response => response.json());
	}
}
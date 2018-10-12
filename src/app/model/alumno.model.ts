export class Alumno {
	constructor(
		public matricula?: number,
		public nombre?: string,
		public apellidoPaterno?: string,
		public apellidoMaterno?: string,
		public fechaIngreso?: string,
		public fechaEgreso?: string,
		public idImagenPerfil?: number,
		public periodoIngreso?: string,
		public seccion?: string,
		public nombreTutor?: string,
		public nombreCarrera?: string,
		public correo?: string,
		public aprobadas?: number,
		public recursos?: number,
		public creditos?: number,
		public promedio?: number,
		public porcentaje?: number ) { }
}
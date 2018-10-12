export class Grupo{
	constructor(
		public seccion?: string,
		public nombrePeriodo?: string,
		public idTutor?: number,
		public idCarrera?: number,
		public totalAlumnos?: number,
		public fechaIngreso?: string,
		public alumnos?: any){}
}
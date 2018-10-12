export class Asignatura {
	constructor(
		public codigo?: string,
		public creditos?: number,
		public nombre?: string,
		public nombre_corto?: string,
		public h_teoria?: number,
		public h_practica?: number,
		public h_independiente?: number,
		public nivel?: string,
		public numPeriodoMin?: number,
		public tipo?: string,
		public fk_rea: number = 7,
		public fk_arrera: number = 1,
		public matricula?: string ) { }
}
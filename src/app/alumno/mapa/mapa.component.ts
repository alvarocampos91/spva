import { Component, OnInit, Input } from '@angular/core';

import { RestDataSource } from '../../model/rest.datasource';

import { Alumno } from '../../model/alumno.model';

@Component({
	selector: 'app-mapa',
	templateUrl: './mapa.component.html',
	styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
	@Input() matricula: string;

	public desits: any[] = [];
	public optativas: any[] = [];
	public asignaturas: any[];

	public alumno: Alumno;
	private estaCargando: boolean;

	constructor( private dataSource: RestDataSource ) { }

	ngOnInit() {
	}

	obtenerCalificacion( codigo: string ): number {
		if(this.asignaturas[codigo].aprobada)
		{
			return this.asignaturas[codigo].calificacion;
		}
		return 0;
	}

	obtenerClase( codigo: string ): string {
		if(this.asignaturas[codigo] === undefined) console.log(codigo);
		if(!this.asignaturas[codigo].aprobada)
		{
			var pre = this.asignaturas[codigo].prerrequisitos;
			var enProyeccion = true;

			for( let i = 0; i < pre.length; i++ ){
				var cod = pre[i].codigo;
				if(!this.asignaturas[cod].aprobada)
				{
					enProyeccion = false;
				}
			}

			if(enProyeccion) return 'proyeccion';

			return 'white-bg';
		}
		return 'check';
	}

	datosCargados(): boolean {
		if(this.alumno===undefined&&!this.estaCargando) {
			this.estaCargando = true;
			this.dataSource.getAlumno(this.matricula).subscribe(alumno=>{
				this.alumno = alumno;
			});
			this.dataSource.getCarreraAsig(this.matricula).subscribe(asignaturas=>{
				this.asignaturas= asignaturas;
				this.dataSource.getAprobadas(this.matricula).subscribe(aprobadas=>{
					for( let i = 0; i < aprobadas.length; i++ ) {
						let key = aprobadas[i].codigo;
						let tipo = this.asignaturas[key].tipo;
						this.asignaturas[key].aprobada = true;
						this.asignaturas[key].calificacion = aprobadas[i].calificacion;

						if ( tipo == 'optativa' )
	                    {
	                        this.optativas.push(this.asignaturas[key]);
	                    }
	                    if ( tipo == 'desit' )
	                    {
	                        this.desits.push(this.asignaturas[key]);
	                    }
					}
				});
			});
		}
		return this.alumno !== undefined && this.asignaturas !== undefined;
	}
}

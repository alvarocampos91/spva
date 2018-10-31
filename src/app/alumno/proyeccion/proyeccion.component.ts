import { Component, OnInit, Input } from '@angular/core';

import { RestDataSource } from '../../model/rest.datasource';

@Component({
	selector: 'app-proyeccion',
	templateUrl: './proyeccion.component.html',
	styleUrls: ['./proyeccion.component.css']
})
export class ProyeccionComponent implements OnInit {
	@Input() matricula: string;

	private proyecciones: any[];
	private cargando: boolean = false;

	constructor( private dataSource: RestDataSource ) { }

	ngOnInit() {
	}

	getProyecciones(){
		if(this.proyecciones === undefined && !this.cargando)
		{
			this.cargando = true;
			this.proyecciones = [];
			this.dataSource.getProyecciones(this.matricula).subscribe( proy => {
				for( let i = 0; i < proy.length; i++ ){
					let ind = this.proyecciones.findIndex( periodo => {
						return periodo.idPeriodo == proy[i].idPeriodo;
					} );
					if(ind == -1)
					{
						ind = this.proyecciones.length;
						this.proyecciones.push({
							idPeriodo: proy[i].idPeriodo,
							nombre: proy[i].nombrePeriodo,
							asignaturas: []
						});
					}
					this.proyecciones[ind].asignaturas.push({
						codigo: proy[i].codigo,
						nombre: proy[i].nombre,
						abreviacion: proy[i].nombreAsignatura
					});
				}
			} );
		}
		return this.proyecciones || [];
	}
}

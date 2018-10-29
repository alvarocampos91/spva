import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Alumno } from '../../model/alumno.model';
import { RestDataSource } from '../../model/rest.datasource';

@Component({
	selector: 'app-cardex',
	templateUrl: './cardex.component.html',
	styleUrls: ['./cardex.component.css']
})
export class CardexComponent implements OnInit {
	@Input() matricula: string;

	@Output() goMapa = new EventEmitter<boolean>();
	@Output() goProyeccion = new EventEmitter<boolean>();

	private cargandoCardex: boolean = false;
	public alumno: Alumno;
	public cardex: any;
	public seleccionado: number = 0;

	constructor( private dataSource: RestDataSource ) { }

	ngOnInit() { }

	estaCargado(): boolean {
		if( this.cardex === undefined && !this.cargandoCardex ) {
			this.cargandoCardex = true;
			this.dataSource.getCardex( this.matricula ).subscribe( cardex => {
				this.cardex = cardex;
				let almno = cardex.alumno;
				this.alumno = new Alumno( almno.matricula, almno.nombre, almno.a_paterno, almno.a_materno, almno.f_ingreso, null, almno.img_perfil, null, almno.seccion, null, cardex.carrera.nombre, null, cardex.aprobadas, cardex.reprobadas, cardex.creditos, cardex.promedio, cardex.porcentaje );
			} );
		}

		return this.cardex !== undefined && this.alumno !== undefined;
	}

	onSeleccionar(i: number) {
		this.seleccionado = i;
	}
}

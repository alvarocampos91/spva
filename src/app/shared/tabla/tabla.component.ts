import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-tabla',
	templateUrl: './tabla.component.html',
	styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
	@Input() nombres: any;
	@Input() datos: any;
	@Input() page: number; // the current page
	@Input() count: number; // how many total items there are in all pages
	@Input() perPage: number; // how many items we want to show per page
	@Input() loading: boolean; // check if content is being loaded

	@Output() seleccionado = new EventEmitter<string>();

	constructor() { }

	ngOnInit() {
	}

	onSeleccionado(nom:string){
		this.seleccionado.emit(nom);
	}
}

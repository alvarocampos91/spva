import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModelModule } from '../model/model.module';

import { CardexComponent } from './cardex/cardex.component';
import { MapaComponent } from './mapa/mapa.component';
import { ProyeccionComponent } from './proyeccion/proyeccion.component';

@NgModule({
	imports: [
		ModelModule, 
		BrowserModule, 
		FormsModule, 
		RouterModule
	],
	declarations: [
		CardexComponent,
		MapaComponent,
		ProyeccionComponent
	],
	exports: [
		CardexComponent,
		MapaComponent,
		ProyeccionComponent
	]
})
export class AlumnoModule { }
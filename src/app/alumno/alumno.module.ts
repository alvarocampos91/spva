import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModelModule } from '../model/model.module';

import { AlumnoCardexComponent } from './alumnoCardex.component';
import { CardexComponent } from './cardex/cardex.component';
import { MapaComponent } from './mapa/mapa.component';
import { ProyeccionComponent } from './proyeccion/proyeccion.component'

@NgModule({
	imports: [
		ModelModule, 
		BrowserModule, 
		FormsModule, 
		RouterModule
	],
	declarations: [
		AlumnoCardexComponent,
		CardexComponent,
		MapaComponent,
		ProyeccionComponent
	],
	exports: [
		AlumnoCardexComponent
	]
})
export class AlumnoModule { }
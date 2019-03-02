import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModelModule } from '../model/model.module';

import { AlumnoComponent } from './alumno.component';
import { AlumnoCardexComponent } from './alumnoCardex.component';
import { AlumnoMapaComponent } from './alumnoMapa.component';
import { AlumnoProyeccionComponent } from './alumnoProyeccion.component';

import { MenuComponent } from '../shared/menu/menu.component';

import { CardexComponent } from '../alumno/cardex/cardex.component';
import { MapaComponent } from '../alumno/mapa/mapa.component';
import { ProyeccionComponent } from '../alumno/proyeccion/proyeccion.component';

@NgModule({
	imports: [
		ModelModule, 
		BrowserModule, 
		FormsModule, 
		RouterModule
	],
	declarations: [
		AlumnoComponent,
		AlumnoCardexComponent,
		AlumnoMapaComponent,
		AlumnoProyeccionComponent
	],
	exports: [
		AlumnoComponent,
		AlumnoCardexComponent,
		AlumnoMapaComponent,
		AlumnoProyeccionComponent
	]
})
export class AlumnoModule { }
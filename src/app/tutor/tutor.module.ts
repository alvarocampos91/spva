import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";

import { AlumnoTablaComponent } from "./alumnoTabla.component";
import { TutoradoComponent } from "./tutorado.component";
import { TutorComponent } from "./tutor.component";

import { RouterModule } from "@angular/router";
import { MenuComponent } from '../shared/menu/menu.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { TablaComponent } from '../shared/tabla/tabla.component';

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
		AlumnoTablaComponent,
		TutorComponent,
		TutoradoComponent,
		MenuComponent,
		PaginationComponent,
		CardexComponent,
		MapaComponent,
		ProyeccionComponent,
    	TablaComponent
	],
	exports: [
		AlumnoTablaComponent,
		TutorComponent,
		TutoradoComponent
	]
})
export class TutorModule { }
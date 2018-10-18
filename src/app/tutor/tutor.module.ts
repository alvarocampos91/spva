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
		PaginationComponent
	],
	exports: [
		AlumnoTablaComponent,
		TutorComponent,
		TutoradoComponent
	]
})
export class TutorModule { }
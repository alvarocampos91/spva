import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModelModule } from '../model/model.module';

import { AlumnoCardexComponent } from './alumnoCardex.component'

@NgModule({
	imports: [
		ModelModule, 
		BrowserModule, 
		FormsModule, 
		RouterModule
	],
	declarations: [
		AlumnoCardexComponent
	],
	exports: [
		AlumnoCardexComponent
	]
})
export class AlumnoModule { }
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AlumnoRepository } from "./alumno.repository";
import { UsuarioRepository } from "./usuario.repository";
import { TutorRepository } from "./tutor.repository";
import { RestDataSource } from "./rest.datasource";

@NgModule({
	imports: [HttpModule],
	providers: [
		AlumnoRepository,
		UsuarioRepository,
		TutorRepository,
		RestDataSource
	]
})
export class ModelModule { }
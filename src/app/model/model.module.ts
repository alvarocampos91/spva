import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AlumnoRepository } from "./alumno.repository";
import { UsuarioRepository } from "./usuario.repository";
import { RestDataSource } from "./rest.datasource";

@NgModule({
	imports: [HttpModule],
	providers: [
		AlumnoRepository,
		RestDataSource,
		UsuarioRepository
	]
})
export class ModelModule { }
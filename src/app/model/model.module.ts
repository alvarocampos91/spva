import { NgModule } from "@angular/core";
import { AlumnoRepository } from "./alumno.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpModule } from "@angular/http";

@NgModule({
	imports: [HttpModule],
	providers: [AlumnoRepository,
		RestDataSource]
})
export class ModelModule { }
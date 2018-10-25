import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";

import { Alumno } from "./alumno.model";

@Injectable()
export class AlumnoRepository {
	constructor(private dataSource: RestDataSource) {
	}

	getBaseUrl(): string {
		return this.dataSource.baseUrl;
	}
}
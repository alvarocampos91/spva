import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AlumnoTablaComponent } from "./tutor/alumnoTabla.component";
import { TutorComponent } from "./tutor/tutor.component";
import { TutorModule } from "./tutor/tutor.module";
import { AlumnoModule } from "./alumno/alumno.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routing } from './app.routing';

import { MenuComponent } from './shared/menu/menu.component';

import { CardexComponent } from './alumno/cardex/cardex.component';
import { MapaComponent } from './alumno/mapa/mapa.component';
import { ProyeccionComponent } from './alumno/proyeccion/proyeccion.component';

import { TutoradoComponent } from "./tutor/tutorado.component";

import { PaginationComponent } from './shared/pagination/pagination.component';
import { TablaComponent } from './shared/tabla/tabla.component';

import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnoCardexComponent } from './alumno/alumnoCardex.component';
import { AlumnoMapaComponent } from './alumno/alumnoMapa.component';
import { AlumnoProyeccionComponent } from './alumno/alumnoProyeccion.component';

import { TutorRepository } from './model/tutor.repository';
import { UsuarioRepository } from './model/usuario.repository';
import { AlumnoRepository } from './model/alumno.repository';

import { RestDataSource } from './model/rest.datasource';

@NgModule({
 declarations: [
    AppComponent,
    LoginComponent,
    CardexComponent,
    MapaComponent,
    ProyeccionComponent,
    MenuComponent,
    AlumnoTablaComponent,
    TutorComponent,
    TutoradoComponent,
    PaginationComponent,
    TablaComponent,
    AlumnoComponent,
    AlumnoCardexComponent,
    AlumnoMapaComponent,
    AlumnoProyeccionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  exports: [
    CardexComponent,
    MapaComponent,
    ProyeccionComponent,
    MenuComponent,
    AlumnoTablaComponent,
    TutorComponent,
    TutoradoComponent,
    AlumnoComponent,
    AlumnoCardexComponent,
    AlumnoMapaComponent,
    AlumnoProyeccionComponent
  ],
  providers: [
    UsuarioRepository,
    TutorRepository,
    RestDataSource,
    AlumnoRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

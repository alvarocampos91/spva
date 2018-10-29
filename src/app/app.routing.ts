import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { TutorComponent } from './tutor/tutor.component';
import { AlumnoTablaComponent } from './tutor/alumnoTabla.component';
import { TutoradoComponent } from './tutor/tutorado.component';

const routes: Routes = [
    { path: "login", component: LoginComponent },
    {
    	path: "tutor", 
    	component: TutorComponent, 
    	children: [
    		{ path: "grupos/:seccion", component: AlumnoTablaComponent },
            { path: ':seccion/alumno/:matricula/:dato', component: TutoradoComponent },
            { path: ":seccion/alumno/:matricula", redirectTo: ":seccion/alumno/:matricula/cardex", pathMatch: "full" },
    		{ path: "grupos", component: AlumnoTablaComponent },
            { path: "**", redirectTo: "grupos", pathMatch: "full" }
    	] 
    },
    { path: "**", redirectTo: "login", pathMatch: "full" }
]

export const Routing = RouterModule.forRoot(routes);
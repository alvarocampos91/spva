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
    		{
                path: "grupos/:seccion",
                component: AlumnoTablaComponent,
                children: [
                    { 
                        path: 'alumno/:matricula/',
                        component: TutoradoComponent
                    }
                ]
            },
    		{ path: "grupos", component: AlumnoTablaComponent }
    	] 
    },
    // { path: "form/:mode", component: FormComponent },
    // { path: "does", redirectTo: "/form/create", pathMatch: "prefix" },
    // { path: "table", component: TableComponent, children: childRoutes },
    // { path: "table/:category", component: TableComponent, children: childRoutes },
    { path: "", redirectTo: "/login", pathMatch: "full" }
]

export const Routing = RouterModule.forRoot(routes);
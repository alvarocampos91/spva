import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AlumnoTablaComponent } from "./tutor/alumnoTabla.component";
import { TutorComponent } from "./tutor/tutor.component";
import { TutorModule } from "./tutor/tutor.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TutorModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

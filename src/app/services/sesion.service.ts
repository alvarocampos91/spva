import { Injectable } from '@angular/core';

import { Usuario } from '../model/usuario.model';

@Injectable()
export class SesionService {
  public token: string;
  public usuario: Usuario;

  constructor() { }

  validarUsuario( user: string, pass: string ){
  	
  }
}

import { Injectable } from '@angular/core';
import { database } from 'firebase'
import { Observable } from 'rxjs'
import { UsuarioModel } from '../../model/usuario.model';

@Injectable()
export class DatabaseProvider {

  constructor() {
    console.log("[LOG] Database de usuario iniciado")
  }

}

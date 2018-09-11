import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Injectable()
export class UsuarioServiceProvider {

  _usuarioLogado: Usuario;

  constructor(private _http: HttpClient) {
  }


  efetuaLogin(email : string, senha: string) : Observable<Usuario> {
    return this._http
      .post<Usuario>('http://192.168.56.101:8080/api/login', {email , senha})
      .do(usuario => this._usuarioLogado = usuario)
  }

  public usuarioLogado() {
    return this._usuarioLogado;
  }
}

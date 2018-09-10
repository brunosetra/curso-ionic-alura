import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Carro } from '../../models/carro.model';

/*
  Generated class for the CarrosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrosServiceProvider {

  constructor(private _http: HttpClient) { }

  lista(): Observable<Carro[]> {
    return this._http.get<Carro[]>('http://192.168.56.101:8080/api/carro/listaTodos');
  }

}

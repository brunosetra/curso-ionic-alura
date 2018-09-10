import { Agendamento } from './../../models/agendamento.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AgendamentoService {

  _url: string = 'http://192.168.56.101:8080/api';

  constructor(private _http: HttpClient) {
  }

  agenda(agendamento: Agendamento) : Observable<any> {
    return this._http
      .post(`${this._url}/agendamento/agenda`, agendamento)
      .do(()=> agendamento.enviado = true)
      .catch(()=> Observable.of(new Error('Não foi possível realizar o agendamento. Tente novamente mais tarde.')));
      
  }

}

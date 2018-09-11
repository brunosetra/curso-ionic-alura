import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage'

import { Agendamento } from '../../models/agendamento.model';

@Injectable()
export class AgendamentoDaoProvider {

  constructor(private _storage : Storage) {
  }

  salva(agendamento : Agendamento) : Observable<any> {
    let chave = agendamento.emailCliente + agendamento.data.substr(0,10);
    let promise = this._storage.set(chave, agendamento);

    return Observable.fromPromise(promise);
  }

  listaTodos() : Observable<Agendamento[]> {
    let agendamentos :  Agendamento[] = [];

    let promise = this._storage
      .forEach((agendamento: Agendamento)=>{agendamentos.push(agendamento)}) 
      .then(()=> {console.log(agendamentos); return agendamentos});

    return Observable.fromPromise(promise);
  }

}
